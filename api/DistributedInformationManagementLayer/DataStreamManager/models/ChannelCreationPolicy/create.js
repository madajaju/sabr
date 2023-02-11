const path = require('path');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Stream Policy',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the ChannelCreationPolicy',
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
        if (inputs.hasOwnProperty('file')) {
            let definition = inputs.file;
            if(inputs.file.data) {
                let fileBuffer = Buffer.from(inputs.file.data);
                let fileString = fileBuffer.toString('utf-8');
                definition = eval(fileString);
            }
            if(definition.transforms) {
                if(definition.transforms.post) {
                    obj.post = new DataTransform({name:obj.name + '-post', fn: definition.transforms.post});
                }
                if(definition.transforms.pre) {
                    obj.pre = new DataTransform({name:obj.name + '-pre', fn: definition.transforms.pre});
                }
            }
        }

        return obj;
    }

};
