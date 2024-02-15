

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
                console.log("IN False");
                deployed = false;
            }
        }
        for (let i in bundle.outputs) {
            let mystream = bundle.outputs[i];
            console.log(`CHECKING OUTPUTS STREAM: ${bundle.name}: `, mystream.name, mystream.state);
            if (mystream.state !== "Enabled") {
                console.log("OUT False");
                deployed = false;
            }
        }

        if (bundle.learningInStream.state !== "Enabled" ||
            bundle.learningOutStream.state !== "Enabled" ||
            bundle.adminInStream.state !== "Enabled" ||
            bundle.adminOutStream.state !== "Enabled") {
            console.log("LEARNADMIN False");
            console.log("LEARNInStream", bundle.learningInStream.state);
            console.log("LEARNOutStream", bundle.learningOutStream.state);
            console.log("AdminIn", bundle.adminInStream.state);
            console.log("ADMINOUT", bundle.adminOutStream.state);
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
