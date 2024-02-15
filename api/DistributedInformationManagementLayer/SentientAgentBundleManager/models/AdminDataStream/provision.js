

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
    friendlyName: 'Provision',
    description: 'Provision a DataStream creates and instances of the data streamm to be deployed.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        bundle: {
            description: 'Bundle Instance to attach the stream instances.',
            type: 'ref',
            required: true,
            model: 'SABundleInstance',
            cardinality: 1,
        },
        policies: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'ChannelCreationPolicy',
            cardinality: 'n'
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the method.

        let numinstances = obj.instances.length
        let instance = undefined;
        if(inputs.direction === 'In') {
            instance = new InputStreamInstance({name: obj.name + numinstances, bundle:inputs.bundle});
            obj.addToInstances(instance);
            instance.parent = obj;
        } else if(inputs.direction === 'Out') {
            instance = new OutputStreamInstance({name: obj.name + numinstances, bundle:inputs.bundle});
            obj.addToInstances(instance);
            instance.parent = obj;
        }
        // Iterate over the Policies to create DataChannel.
        for(let i in inputs.policies) {
            let policy = inputs.policies[i];
            // The policy should be evaluated and the channel created.
            let channel = new DataChannel({name:obj.name + '/' + policy.name, bundle:inputs.bundle });
            obj.addToChannels(channel);
        }

        // Add the admin transform
        for(let i in obj.transforms) {
            let trans = obj.transforms[i];
            let tinstance = new DataTransformInstance({name: trans.name, version: "0.0.1", fn: trans.fn });
            tinstance.addToInputs(instance);
            instance.addToTransforms(tinstance);
        }

        if(instance) {
            instance.provision({policies: inputs.policies});
        }
        return instance;
    }
};
