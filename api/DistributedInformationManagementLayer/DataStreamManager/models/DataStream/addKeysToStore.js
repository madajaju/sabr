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
    friendlyName: 'addKeysToStore',
    description: 'Build a Data Stream, generates the security keys for the data stream.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        keyType: {
            description: 'The type of keys to add to the store encrypt or decrypt',
            type: 'string',
            required: true
        },
        store: {
            descritpion: 'The store to place the keys',
            type: 'ref',
            required: true
        }
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for this method.
        // Check the state to see if the keys need to be re-generated.
        if (inputs.keyType === 'decrypt') {
            // Now add the channel keys if they exist.
            inputs.store.addToKeys(obj.decryptionKey);
            for (let i in obj.channels) {
                let channel = obj.channels[i];
                if (!channel.decryptionKey) {
                    console.error("Channel not built:", channel.name);
                } else {
                    inputs.store.addToKeys(channel.decryptionKey);
                }
            }
        } else if (inputs.keyType === 'encrypt') {
            inputs.store.addToKeys(obj.encryptionKey);
            // Now add the channel keys if they exist.
            for (let i in obj.channels) {
                let channel = obj.channels[i];
                if (!channel.encryptionKey) {
                    console.error("Channel not built:", channel.name);
                } else {
                    inputs.store.addToKeys(channel.encryptionKey);
                }
            }
        }
    }
};
