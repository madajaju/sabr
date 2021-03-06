const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a SABundle',
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
        // For each Stream in the Bundle create a streaminstance.
        // Pass the policies to the stream so appropriate channels are created.
        // Create a SABundleInstance with all of the StreamInstances attached.
        let numi = obj.instances.length;
        let instance = new SABundleInstance({name:obj.name + '-' + numi, parent: obj});
        obj.addToInstances(instance);
        instance.deploy(inputs);
        return instance;
    }
};
