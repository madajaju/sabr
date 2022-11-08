const path = require('path');

module.exports = {
    friendlyName: 'Provision',
    description: 'Provision a DataStream creates and instances of the data streamm to be deployed.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        bundle: {
            description: 'Bundle Instance to attach the stream instances.',
            type: 'ref',
            required: true,
            model: 'SABundleInstance',
            cardinality: 1,
        },
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
        // inputs contains the obj for the method.

        let numinstances = obj.instances.length
        let instance = undefined;
        if(inputs.direction === 'In') {
            instance = new InputStreamInstance({name: obj.name + numinstances, bundle:inputs.bundle});
            obj.addToInstances(instance);
            instance.parent = obj;
        } else if(inputs.direction === 'Out') {
            instance = new OutputStreamInstance({name: obj.name + numinstances, bundle:inputs.bundle});
            obj.addToInstances(instance);
            instance.parent = obj;
        }
        // Iterate over the Policies to create DataChannel.
        for(let i in inputs.policies) {
            let policy = inputs.policies[i];
            // The policy should be evaluated and the channel created.
            let channel = new DataChannel({name:obj.name + '/' + policy.name, bundle:inputs.bundle });
            obj.addToChannels(channel);
        }

        // Add the admin transform
        for(let i in obj.transforms) {
            let trans = obj.transforms[i];
            let tinstance = new DataTransformInstance({name: trans.name, version: "0.0.1", fn: trans.fn });
            tinstance.addToInputs(instance);
            instance.addToTransforms(tinstance);
        }

        if(instance) {
            instance.provision({policies: inputs.policies});
        }
        return instance;
    }
};
