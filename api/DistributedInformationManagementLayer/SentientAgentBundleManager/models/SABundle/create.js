const path = require('path');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Sentient Agent Bundle',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the Sentient Agent Bundle',
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
            if(inputs.file.data) { // This coming from a rest call.
                let fileBuffer = Buffer.from(inputs.file.data);
                let fileString = fileBuffer.toString('utf-8');
                definition = eval(fileString);
            } else if(typeof inputs.file === 'string') {
                definition = eval(inputs.file);
            }
            for(let name in definition.inputs) {
                let streamObj = new DataStream({name: name});
                obj.addToInputs(streamObj)
                streamObj.addToConsumers(obj);
            }
            for(let name in definition.outputs) {
                let streamObj = new DataStream({name:name});
                obj.addToOutputs(streamObj);
                streamObj.addToProducers(obj);
            }
            for(let aname in definition.applications) {
                let app = definition.applications[aname];
                let appObj = new Application({name: aname, fn: app});
                obj.addToApplications(appObj);
            }
            for(let name in definition.transforms) {
                let transformDef = definition.transforms[name];
                let transformObj = new DataTransform({name:name});
                for(let i in transformDef.inputs) {
                    let inputName = transformDef.inputs[i];
                    // Add the transform object to the input stream so we know what to do when the stream gets
                    // data.
                    if(obj.inputs.hasOwnProperty(inputName)) {
                        let streamObj = obj.inputs[inputName];
                        transformObj.addToInputs(streamObj);
                        streamObj.addToTransforms(transformObj);
                    }
                    else {
                        console.error("Could not find the input:", inputName);
                    }
                }
                for(let i in transformDef.outputs) {
                    let outputName = transformDef.outputs[i];
                    if(obj.outputs.hasOwnProperty(outputName)) {
                        transformObj.addToOutputs(obj.outputs[outputName]);
                    }
                    else {
                        console.error("Could not find the output:", outputName);
                    }
                }
                transformObj.fn = transformDef.fn;
                obj.addToTransforms(transformObj);
            }
            for (let name in definition.aimodels) {
                let aimodel = definition.aimodels[name];
                let aimodelObj = new AIModel({name: name});
                obj.addToAimodels(aimodelObj);
            }
        }

        let linstream = new DataStream({name:"LearningStream"});
        obj.learningStream = linstream
        linstream.addToConsumers(obj);
        linstream.addToProducers(obj);

        let adminStream = new AdminDataStream({name:"AdminStream"});
        obj.adminStream = adminStream
        adminStream.addToConsumers(obj);
        adminStream.addToProducers(obj);
        return obj;
    }

};
