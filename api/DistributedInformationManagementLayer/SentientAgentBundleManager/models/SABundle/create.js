

/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

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
