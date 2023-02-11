const path = require('path');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Capability',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the capability',
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
        // inputs contains the obj for the this method.
        obj.name = inputs.name;
        if(inputs.hasOwnProperty('file')) {
            let definition = inputs.file;
            if(inputs.file.data) { // This coming from a rest call.
                let fileBuffer = Buffer.from(inputs.file.data);
                let fileString = fileBuffer.toString('utf-8');
                try {
                    definition = eval(fileString);
                }
                catch(e) {
                    console.error("Error evaluating file:", fileString);
                    console.error(e);
                    return obj;
                }
            }
            for (let name in definition.bundles) {
                let sabr = definition.bundles[name];
                sabr.name = name;
                let sabrObj = new SABundle({name:name, file: sabr});
                obj.addToBundles(sabrObj);
            }
            for (let name in definition.policies) {
                let policy = definition.policies[name];
                policy.name = name;
                let policyObj = new ChannelCreationPolicy({name:name, file: policy});
                obj.addToPolicies(policyObj);
            }
        }
        return obj;
    }
};
