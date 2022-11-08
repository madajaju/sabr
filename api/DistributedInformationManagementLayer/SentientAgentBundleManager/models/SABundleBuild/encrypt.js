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
