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

    fn: (obj, inputs) => {
        // For each Stream in the Bundle create a streaminstance.
        // Pass the policies to the stream so appropriate channels are created.
        // Create a SABundleInstance with all of the StreamInstances attached.
        // Thes Streams are used to quick lookup when setting up the transforms.
        let inStreams = {};
        let outStreams = {};
        let parent = obj.parent;
        for (let i in parent.inputs) {
            let stream = parent.inputs[i];
            let sinstance = stream.deploy({policies:inputs.policies, direction:'In', bundle:obj});
            obj.addToInputs(sinstance);
            inStreams[stream.name] = sinstance;
        }
        for (let i in parent.outputs) {
            let stream = parent.outputs[i];
            let sinstance = stream.deploy({policies:inputs.policies, direction:'Out', bundle:obj});
            obj.addToOutputs(sinstance);
            outStreams[stream.name] = sinstance;
        }
        let learnInInstance = parent.learningInput.deploy({policies:inputs.policies, direction:'In', bundle:obj});
        obj.learningInput = learnInInstance;
        // This connects the instance streams to the bundle stream.
        let learnOutInstance = parent.learningOutput.deploy({policies:inputs.policies, direction:'Out', bundle:obj});
        obj.learningOutput = learnOutInstance;

        let adminInstance = parent.adminStream.deploy({policies:inputs.policies, direction:'In', bundle:obj});
        obj.adminStream = adminInstance;
        let admoutInstance = parent.admoutStream.deploy({policies:inputs.policies, direction:'Out', bundle:obj});
        obj.admoutStream = admoutInstance;

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
        /*let apps = parent.applications;
        for(let aname in apps) {
            let app = apps[aname];
            let fn = app.fn;
            fn(obj);
        }*/

        return obj;
    }
};
