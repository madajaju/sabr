const path = require('path');

module.exports = {
    friendlyName: 'provision',
    description: 'Provision a Data Stream Instance which will create channel instances for deployment.',
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
        let parent = obj.parent;
        for(let i in parent.channels) {
            let channel = parent.channels[i];
            let instance = new OutputChannelInstance({name: channel.name + '.out'});
            instance.bundle = obj.bundle;
            channel.addToInstances(instance);
            obj.addToChannels(instance);
        }
        return obj;
    }
};
