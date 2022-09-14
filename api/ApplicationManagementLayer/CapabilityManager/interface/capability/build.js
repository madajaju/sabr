const path = require('path');

module.exports = {
    friendlyName: 'build',
    description: 'Build a Capability',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the capability',
            type: 'string', // string|boolean|number|json
            required: false
        },
        id: {
            description: 'id of the capability',
            type: 'string', // string|boolean|number|json
            required: false
        },
    },

    exits: {},

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        if(inputs.name) {
            capability = Capability.find(inputs.name);
        } else if(inputs.id) {
            capability = Capability.find(inputs.id);
        }
        capability.build({name:"Auto"});
        env.res.json(capability);
        return capability;
    }
};
