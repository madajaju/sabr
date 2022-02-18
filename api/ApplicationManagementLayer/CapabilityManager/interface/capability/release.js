const path = require('path');

module.exports = {
    friendlyName: 'release',
    description: 'Release a Capability',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the capability',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        return obj;
    }
};
