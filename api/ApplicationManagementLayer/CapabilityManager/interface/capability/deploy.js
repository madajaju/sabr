const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a Capability',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        capability: {
            description: 'name of the capability',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {},

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        let obj = Capability.find(inputs.capability);
        let cinstance = obj.deploy();
        return cinstance;
    }
};
