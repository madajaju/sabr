

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
