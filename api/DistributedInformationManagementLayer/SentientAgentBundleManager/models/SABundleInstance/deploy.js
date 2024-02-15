

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
    friendlyName: 'deploy',
    description: 'Deploy a a SABundleInstance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        policies: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'ChannelCreationPolicy',
            cardinality: 'n'
        },
        parameters: {
            description: 'Parameters for the Instance',
            type: 'json', // string|boolean|number|json
            required: false,
        },
    },

    exits: {},

    fn: async (obj, inputs) => {
        // For each Stream in the Bundle create a streaminstance.
        // Only after all of the instances are created then
        // Pass the policies to the stream so appropriate channels are created.
        // Create a SABundleInstance with all of the StreamInstances attached.
        // Thes Streams are used to quick lookup when setting up the transforms.
        let inStreams = {};
        let outStreams = {};
        let parent = obj.parent;
        for (let i in parent.inputs) {
            let stream = parent.inputs[i];
            let sinstance = stream.provision({policies:inputs.policies, direction:'In', bundle:obj});
            obj.addToInputs(sinstance);
            inStreams[stream.name] = sinstance;
        }
        for (let i in parent.outputs) {
            let stream = parent.outputs[i];
            let sinstance = stream.provision({policies:inputs.policies, direction:'Out', bundle:obj});
            obj.addToOutputs(sinstance);
            outStreams[stream.name] = sinstance;
        }
        // This connects the instance streams to the bundle stream.
        obj.learningInStream = parent.learningStream.provision({policies:inputs.policies, direction:'In', bundle:obj});
        obj.learningOutStream = parent.learningStream.provision({policies:inputs.policies, direction:'Out', bundle:obj});
        obj.adminInStream = parent.adminStream.provision({policies:inputs.policies, direction:'In', bundle:obj});
        obj.adminOutStream = parent.adminStream.provision({policies:inputs.policies, direction:'Out', bundle:obj});
        // Deploy the Transforms
        for(let i in parent.transforms) {
            let trans = parent.transforms[i];
            let tinstance = new DataTransformInstance({name: trans.name, version: "0.0.1", fn: trans.fn });
            for(let i in trans.inputs) {
                let sname = trans.inputs[i].name;
                if(inStreams.hasOwnProperty(sname)) {
                    tinstance.addToInputs(inStreams[sname]);
                    inStreams[sname].addToTransforms(tinstance);
                } else {
                    console.error("Cannot find the input stream ", sname," for the transform!", trans.name);
                }
            }
            for(let i in trans.outputs) {
                let sname = trans.outputs[i].name;
                if(outStreams.hasOwnProperty(sname)) {
                    tinstance.addToOutputs(outStreams[sname]);
                    outStreams[sname].addToTransforms(tinstance);
                } else {
                    console.error("Cannot find the input stream ", sname," for the transform!", trans.name);
                }
            }
            obj.addToTransforms(tinstance);
        }
        // Set up the admin stream
	let atasks = [];
        try {
            atasks.push(obj.adminInStream.deploy());
            atasks.push(obj.adminOutStream.deploy());
            // Deploy the learning stream
            atasks.push(obj.learningInStream.deploy());
            atasks.push(obj.learningOutStream.deploy());
            // Now deploy the output streams
            for (let i in obj.outputs) {
                atasks.push(obj.outputs[i].deploy());
            }
            // Now the input streams.
            for (let i in obj.inputs) {
                atasks.push(obj.inputs[i].deploy());
            }
        }
        catch(e) {
            console.error(e);
        }
        // Cannot start the application until everything has been set up and the response made. This should be event
        // driven.
	let retval = await Promise.all(atasks);
	_startApplications(parent, obj, inputs.parameters);

        return retval;
    }
};

function _startApplications(parent, obj, parameters) {

    let apps = parent.applications;
    console.log("Start the Applications:");
    for(let aname in apps) {
        let app = apps[aname];
        let fn = app.fn;
        fn(obj, parameters);
    }
}
