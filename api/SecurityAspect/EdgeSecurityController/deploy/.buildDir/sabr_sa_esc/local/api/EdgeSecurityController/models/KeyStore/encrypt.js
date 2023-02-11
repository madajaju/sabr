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
