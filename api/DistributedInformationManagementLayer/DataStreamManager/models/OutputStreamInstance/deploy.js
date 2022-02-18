const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a Data Stream Instance',
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

    fn: (obj, inputs) => {
        // inputs contains the obj for the this method.
        let parent = obj.parent;
        // Iterate over the parent stream and create instance channels.
        for(let i in parent.channels) {
            let channel = parent.channels[i];
            let instance = new OutputChannelInstance({name: channel.name});
            instance.bundle = obj.bundle;
            channel.addToInstances(instance);
            obj.addToChannels(instance);
            instance.deploy();
        }
        return obj;
    }
};
