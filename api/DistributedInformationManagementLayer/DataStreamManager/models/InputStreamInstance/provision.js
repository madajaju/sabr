const path = require('path');

module.exports = {
    friendlyName: 'provision',
    description: 'Provison a Data Stream Instance which will create the channelinstances that need to be deployed.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        policies: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'StreamPolicy',
            cardinality: 'n'
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for this method.
        let parent = obj.parent;
        // Iterate over the parent stream and create instance channels.
        for(let i in parent.channels) {
            let channel = parent.channels[i];
            let instance = new InputChannelInstance({
                name: channel.name + '.in',
                stream: obj,
                parent: channel,
                transforms: parent.transforms,
                bundle: obj.bundle
            });
            channel.addToInstances(instance);
            obj.addToChannels(instance);
        }
        return obj;
    }
};
