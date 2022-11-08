const path = require('path');

module.exports = {
    friendlyName: 'create',
    description: 'Description of the action',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        file: {
            description: 'Description for the parameter',
            type: 'file', // string|boolean|number|json
            required: false
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

        if (inputs.hasOwnProperty('file')) {
            let definition = inputs.file;
            console.log("Inputs File Data:", inputs.file);
            if (inputs.file.data) { // This coming from a rest call.
                let fileBuffer = Buffer.from(inputs.file.data);
                let fileString = fileBuffer.toString('utf-8');
                definition = eval(fileString);
            } else if (typeof inputs.file === 'string') {
                definition = eval(inputs.file);
            }
            let policies = [];
            for(let pname in definition) {
                let policydef = definition[pname];
                let policy = new StreamPolicy({name: pname, file: policydef});
                policies.push(policies);
            }

            if(env.res) {
                env.res.json({status: 'complete', data:policies});
                env.res.end();
            }
            return;
        }
        if(env.res) {
            env.res.status({status: 'failed', data:"No Policies found in the file!"});
            env.res.end();
        }
    }
};
