/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
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
