const path = require('path');

module.exports = {
    friendlyName: 'process',
    description: 'process the admin input stream.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'StreamPolicy',
            cardinality: 'n'
        },
        properties: {
            description: 'Metadata for the data. Contains the heritage of the data.',
            type: 'json',
            required: true,
        }
    },

    exits: {},

    fn: function (obj, inputs) {
        let handlers = {
            'sabundleinstance.enabled': (obj, inputs) => {
                console.log("Handled SABundle Instance Enabled:",inputs);
            },
        }
        if(handlers.hasOwnProperty(inputs.event)) {
            return handlers[inputs.event](obj, inputs);
        }
        return true;
    }
};
