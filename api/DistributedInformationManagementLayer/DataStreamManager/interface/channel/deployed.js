const path = require('path');

module.exports = {
    friendlyName: 'deployed',
    description: 'Channel Instance has been deployed. Notify the stream of its status.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        channel: {
            description: 'Channel name',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (inputs, env) {
        // inputs contains the obj for this method.
        if(!inputs.channel) {
            return;
        }
        console.log("CHANNEL deployed:", inputs.channel);
        let channel = DataChannelInstance.find(inputs.channel);
        // If the DataChannel is not here then do nothing.
        if (!channel) {
            if(env.res) {
                env.res.json({status: 'error', error: "Channel " + inputs.channel + ' not found!'});
            }
            return;
        }
        let stream = channel.stream;
        console.log("STREAM OF CHANNEL deployed:", stream.name);
        let deployed = true;
        for (let i in stream.channels) {
            let mychannel = stream.channels[i];
            if (mychannel.state !== "Enabled") {
                deployed = false;
            }
        }
        if (deployed) {
            console.log("STREAM OF CHANNEL CALLING deployed:", stream.name);
            stream.deployed();
        }
        if(env.res) {
            env.res.json({status: 'ok'});
        }
    }
};
