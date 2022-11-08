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
        obj.store.encrypt({key: obj.encryptKey, iv: obj.iv});
    }
};
