/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

const crypto = require('crypto');

module.exports = {
    friendlyName: 'generatePair',
    description: 'Create the security Key.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'Name of the SecurityKey Pair',
            type: 'string',
            required: false,
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        let name = inputs.name || 'SABRStreamDefault';
        let aesKeyString = crypto.randomBytes(32);
        /*
        const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            }
        });
        */
        const key = new SecurityKey({name: `${inputs.name}`, value: aesKeyString});

        return key;
    }
};
