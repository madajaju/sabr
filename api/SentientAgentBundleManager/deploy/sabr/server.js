const { Producer, Consumer, logLevel } = require('pulsar-flex')
const process = require('process');

let pulsarHost = process.env.PULSAR_HOST || "localhost:6650";
let sabrName = process.env.SABR_NAME || 'Default';
let sabrStream = process.env.SABR_STREAM || './streams.js';
let sabrPolicies = process.env.SABR_POLICY || './policies.js';
let streams = require(sabrStream);
let policies = require(sabrPolicies);
streams.policies = policies;

console.log("Pulsar HOST:", pulsarHost);

let producers = {};
let consumers = {};

console.log("Starting the Run");
const run = async () => {
    // Set up the producers and consumers
    for(let i in streams.inputs) {
        let input = streams.inputs[i];
        input.name = i;
        createConsumers(input);
    }
    for(let i in streams.outputs) {
        let output = streams.outputs[i];
        output.name = i;
        createProducers(output);
    }
    // Create pulsar connections.
    // Create the producer connections.
    for(let pname in producers) {
        await producers[pname].pulsar.create();
    }
    // Create the pulsare consumers.
    for(let cname in consumers) {
        let consumer = consumers[cname];
        await consumer.pulsar.subscribe();

        await consumer.pulsar.run({
            onMessage: async ({ ack, message, properties, redeliveryCount }) => {
                await ack(); // Default is individual ack
                // await ack({type: Consumer.ACK_TYPES.CUMULATIVE});
                let myMessage = message.toString('utf-8');
                console.log("Consume:", myMessage);
                let data = consumer.transform(myMessage);
                console.log("Transform:", data);
                if(consumer.output) {
                    for (let pname in streams.policies) {
                        let prodName = consumer.output + '-' + pname;
                        if (producers.hasOwnProperty(prodName)) {
                            let output = producers[prodName];
                            let channelData = output.transform(data);
                            await output.pulsar.sendMessage({payload: channelData});
                        } else {
                            console.error("Could not find: ", prodName);
                        }
                    }
                }
            }, autoAck: false, // specify true in order to use automaticAck
        });
    }
    if(streams.source) {
        for (let i = 0; i < 10000; i++) {
            let data = streams.source.generator(i);
            for(let pname in producers) {
                let myProducer = producers[pname];
                let channelData = myProducer.transform(data);
                await myProducer.pulsar.sendMessage({payload:channelData});
            }
        }
    }
}

run().catch(console.error);

function createProducers(stream) {
    for(let pname in streams.policies) {
        let policy = streams.policies[pname];
        let topicName = stream.name + '-' + pname;
        console.log("Create Producers:", topicName);
        let producer = new Producer({
            topic: topicName,
            discoveryServers: [pulsarHost],
            producerAccessMode: Producer.ACCESS_MODES.SHARED,
            producerName: sabrName,
            logLevel: logLevel.DEBUG
        });
        producers[topicName] = {
            pulsar: producer,
            transform: policy.transform
        }
    }
}

function createConsumers(stream) {
    for(let pname in streams.policies) {
        let topicName = stream.name + '-' + pname;
        console.log("Create Consumer:", topicName);
        let consumer = new Consumer({
            topic: topicName,
            discoveryServers: [pulsarHost],
            subscription: 'mySubscription',
            subType: Consumer.SUB_TYPES.EXCLUSIVE,
            consumerName: sabrName,
            receiveQueueSize: 1000,
            logLevel: logLevel.DEBUG,
        });
        consumers[topicName] = {
            pulsar: consumer,
            transform: stream.transform,
            output: stream.output,
        }
    }
}
