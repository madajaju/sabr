const path = require('path');

module.exports = {
    friendlyName: 'create',
    description: 'Create an AdminTransform',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the SAB AdminTransform',
            type: 'string', // string|boolean|number|json
            required: true
        },
        file: {
            description: 'file with the definition',
            type: 'file', // string|boolean|number|json
            required: false
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for this method.
        obj.name = inputs.name;

        obj.fn = AdminTransform.process;
        return obj;

    }

};
