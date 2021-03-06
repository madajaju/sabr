const path = require('path');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Data Channel Instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the Sentient Agent Bundle',
            type: 'string', // string|boolean|number|json
            required: true
        },
        file: {
            description: 'file with the definition',
            type: 'YAML', // string|boolean|number|json
            required: false
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        return obj;
    }

};
