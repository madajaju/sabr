const path = require('path');
const {Producer, logLevel } = require('pulsar-flex');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Output Channel Instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        // Create the consumer for the channel.
        obj.name = inputs.name;
        let topicName = obj.name.replace(/\//g,'-');
        let pulsarHost = ailtire.config.pulsarHost;
        let sabrName = obj.name;

        let producer = new Producer({
            topic: topicName,
            discoveryServers: [pulsarHost],
            producerAccessMode: Producer.ACCESS_MODES.SHARED,
            _producerName: sabrName,
            logLevel: logLevel.DEBUG
        });
        obj.producer = producer;
        return obj;
    }

};
