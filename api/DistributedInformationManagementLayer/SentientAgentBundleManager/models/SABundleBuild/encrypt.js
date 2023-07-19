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
    friendlyName: 'encrypt',
    description: 'Encrypt the BABundle',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        bundle: {
            description: 'Bundle to be encrypted',
            type: 'ref', // string|boolean|number|json
            required: true
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        let bundle = inputs.bundle;
        let jscript = bundle.toJScript();

        let keys = SecurityKey.generatePair({name: obj.name})
        obj.encryptKey = keys.public
        obj.decryptKey = keys.private
        obj.iv = new SecurityKey({name: `${obj.name}-iv`, value: crypto.randomBytes(16)});

        const storeBuf = Buffer.from(JSON.stringify(jscript));
        const cipher = crypto.createCipheriv('aes256', obj.encryptKey.value, obj.iv.value);
        let edata = cipher.update(storeBuf, 'utf-8', 'hex');
        edata += cipher.final('hex');
        obj.encryptedData =edata;
    }
};
