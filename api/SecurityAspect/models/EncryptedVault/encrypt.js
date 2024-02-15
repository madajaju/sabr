

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

const crypto = require('crypto');

module.exports = {
    friendlyName: 'encryption',
    description: 'Encrypt a the Encrypted Vault',
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
        for (let i in obj.streams) {
            storeObj.push({
                name: obj.streams[i].name,
                value: obj.streams[i].value
            });
        }
        const storeBuf = Buffer.from(JSON.stringify(storeObj));
        const cipher = crypto.createCipheriv('aes256', inputs.key.value, inputs.iv.value);
        let edata = cipher.update(storeBuf, 'utf-8', 'hex');
        edata += cipher.final('hex');
        obj.encryptedData = edata;
        obj.streams = [];
    }
};
