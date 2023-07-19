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
    description: 'Channel Instance has been deployed. Notify the stream of its status.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        channel: {
            description: 'Channel name',
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
        // inputs contains the obj for this method.
        if(!inputs.channel) {
            return;
        }
        let channel = DataChannelInstance.find(inputs.channel);
        // If the DataChannel is not here then do nothing.
        if (!channel) {
            if(env.res) {
                env.res.json({status: 'error', error: "Channel " + inputs.channel + ' not found!'});
            }
            return;
        }
        let stream = channel.stream;
        let deployed = true;
        for (let i in stream.channels) {
            let mychannel = stream.channels[i];
            if (mychannel.state !== "Enabled") {
                deployed = false;
            }
        }
        if (deployed) {
            stream.deployed();
        }
        if(env.res) {
            env.res.json({status: 'ok'});
        }
    }
};
