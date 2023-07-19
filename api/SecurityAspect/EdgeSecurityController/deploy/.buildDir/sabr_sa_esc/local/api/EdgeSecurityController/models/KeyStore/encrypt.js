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
        key: {
            description: 'The encryption key for the store.',
            type: 'SecurityKey',
            required: true,
        },
        iv: {
            description: 'The encryption key for the store.',
            type: 'SecurityKey',
            required: true,
        },
    },

    exits: {},

    fn: function (obj, inputs) {

        // Now encrypt the store and create a HASH of the encrypted Store
        const storeObj = [];
        for (let i in obj.keys) {
            storeObj.push({
                name: obj.keys[i].name,
                value: obj.keys[i].value
            });
        }
        const storeBuf = Buffer.from(JSON.stringify(storeObj));
        const cipher = crypto.createCipheriv('aes256', inputs.key.value, inputs.iv.value);
        let edata = cipher.update(storeBuf, 'utf-8', 'hex');
        edata += cipher.final('hex');
        obj.encryptedData = edata;
        obj.keys = undefined;
    }
};
