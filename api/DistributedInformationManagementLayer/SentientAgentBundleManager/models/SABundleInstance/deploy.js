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
            model: 'StreamPolicy',
            cardinality: 'n'
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
        try {
            obj.adminInStream.deploy();
            obj.adminOutStream.deploy();
            // Deploy the learning stream
            obj.learningInStream.deploy();
            obj.learningOutStream.deploy();
            // Now deploy the output streams
            for (let i in obj.outputs) {
                obj.outputs[i].deploy();
            }
            // Now the input streams.
            for (let i in obj.inputs) {
                obj.inputs[i].deploy();
            }
        }
        catch(e) {
            console.error(e);
        }
        // Cannot start the application until everything has been set up and the response made. This should be event
        // driven.
        /*
        let apps = parent.applications;
        for(let aname in apps) {
            let app = apps[aname];
            let fn = app.fn;
            fn(obj);
        }

         */
        return obj;
    }
};
