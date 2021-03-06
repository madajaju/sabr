const path = require('path');
const {Consumer, logLevel } = require('pulsar-flex');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Input Channel Instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        // Create the consumer for the channel.
        obj.name = inputs.name;
        obj.bunde = inputs.bundle;
        let topicName = obj.name.replace(/\//g, '-');
        let pulsarHost = ailtire.config.pulsarHost;
        let subscriptionName = inputs.bundle.parent.name + '-' + inputs.parent.name + 'Subscription';
        let sabrName = inputs.bundle.name + '-' + inputs.name + '-Consumer';
        let consumer = new Consumer({
            topic: topicName,
            discoveryServers: [pulsarHost],
            subscription: subscriptionName,
            subType: Consumer.SUB_TYPES.FAILOVER,
            consumerName: sabrName,
            receiveQueueSize: 1000,
            logLevel: logLevel.DEBUG,
        });
        obj.consumer = consumer;
        return obj;
    }

};
