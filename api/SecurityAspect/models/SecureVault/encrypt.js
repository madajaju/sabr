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
    friendlyName: 'encryption',
    description: 'Encrypt a the Security Vault',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
         name: {
            description: 'Name of the SecurityKey Pair',
            type: 'string',
            required: false,
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // First create the public and private keys
        let keys = SecurityKey.generatePair({name: obj.name})
        obj.encryptKey = keys.public
        obj.decryptKey = keys.private
        obj.iv = new SecurityKey({name: `${obj.name}-iv`, value: crypto.randomBytes(16)});

        // Now encrypt the store and create a HASH of the encrypted Store
        obj.vault.encrypt({key: obj.encryptKey, iv: obj.iv});
    }
};
