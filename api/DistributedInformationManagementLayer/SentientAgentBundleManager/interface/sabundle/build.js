const path = require('path');

module.exports = {
    friendlyName: 'build',
    description: 'Build the SAB with all of the elements including encrypting the bundle and the vault.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'The name of the Bundle.',
            type: 'string', // string|boolean|number|json
            required: false
        },
        id: {
            description: 'The id of the build.',
            type: 'string', // string|boolean|number|json
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
        let bundle = SABundle.find(inputs.name);
        let id = inputs.id || bundle.name;
        if(bundle) {
            let build = bundle.build({buildID:id});
            env.res.json({id: build.id});
        }
        env.res.json({status: "Error"})
    }
};
