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
    friendlyName: 'build',
    description: 'Build a Data Stream, generates the security keys for the data stream.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for this method.
        // Check the state to see if the keys need to be re-generated.
        if(obj.encryptionKey === null) {
            const pair = SecurityKey.generatePair({name: `${obj.name}`});
            obj.encryptionKey = pair.public;
            obj.decryptionKey = pair.private;
            obj.error = false;
        }

        for(let i in obj.channels) {
            let channel = obj.channels[i];
            channel.build();
        }
        obj.built();
    }
};
