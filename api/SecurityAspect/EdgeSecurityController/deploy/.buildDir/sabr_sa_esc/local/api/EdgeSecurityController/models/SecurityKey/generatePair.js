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
        const publicKey = new SecurityKey({name: `${inputs.name}-encrypt`, value: aesKeyString});
        const privateKey = new SecurityKey({name: `${inputs.name}-decrypt`, value: aesKeyString});

        return {public: publicKey, private: privateKey};
    }
};
