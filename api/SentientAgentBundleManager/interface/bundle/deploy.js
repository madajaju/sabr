const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy the bundle',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        sabr: {
            description: 'The name of the SABR',
            type: 'string', // string|boolean|number|json
            required: true
        },
        policies: {
            description: 'The name of the policies to use in the deployment. Comma separated',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        let sabr = SABundle.find(inputs.sabr);
        let policies = [];
        if(inputs.policies) {
            inputs.policies = inputs.policies.split(/,/);
            for(let i in inputs.policies) {
                let policy = StreamPolicy.find(inputs.policies[i]);
                policies.push(policy);
            }
        }
        sabr.deploy({policies: policies});
        env.res.json({id:sabr.id, name:sabr.name});
    }
};
