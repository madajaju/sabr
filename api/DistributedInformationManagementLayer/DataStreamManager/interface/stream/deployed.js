const path = require('path');

module.exports = {
    friendlyName: 'deployed',
    description: 'Stream has been deployed. Notify the bundle of its status.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        stream: {
            description: 'Stream name',
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
        if(!inputs.stream) {
            // Do nothing quick.
            return;
        }
        let stream = DataStreamInstance.find(inputs.stream);
        // If the stream is not here then it is on a different server. Do Nothing.
        if (!stream) {
            if(env.res) {
                env.res.json({status: 'error', error: "Stream " + inputs.stream + ' not found!'});
            }
            return;
        }
        let bundle = stream.bundle;
        let deployed = true;
        for (let i in bundle.inputs) {
            let mystream = bundle.inputs[i];
            if (mystream.state !== "Enabled") {
                deployed = false;
            }
        }
        for (let i in bundle.outputs) {
            let mystream = bundle.outputs[i];
            if (mystream.state !== "Enabled") {
                deployed = false;
            }
        }
        if(bundle.learningStream.state !== "Enabled") {
            deployed = false;
        } else if(bundle.adminStream.state !== "Enabled") {
            deployed = false;
        }

        if (deployed) {
            bundle.deployed();
        }
        if(env.res) {
            env.res.json({status: 'ok'});
        }
    }
};
