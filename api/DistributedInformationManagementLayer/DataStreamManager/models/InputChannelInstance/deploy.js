const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy the channel instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {},

    exits: {},

    fn: async function (obj, inputs) {
        // inputs contains the obj for this method.
        let consumer = obj.consumer;

        // Need to wait for the consumer before calling run.
        try {
            await consumer.subscribe();
            console.log("Subscribed:", obj.name );
            await consumer.run({
                onMessage: async ({ack, message, properties, redeliveryCount}) => {
                    await ack(); // Default is individual ack
                    // await ack({type: Consumer.ACK_TYPES.CUMULATIVE});
                    let myMessage = message.toString('utf-8');
                    // let myProps = properties.toString('utf-8');
                    obj.stream.process({data:myMessage, properties:properties, channel:obj});
                }, autoAck: false, // specify true in order to use automaticAck
            });
            obj.deployed();
        } catch (e) {
            console.error("Error during deploy of Channel Instance:", e);
            obj.message = `Error Creating Consumer for channel:${obj.name}, ${e}`;
            obj.failed();
        }
        return obj;
    }
};
