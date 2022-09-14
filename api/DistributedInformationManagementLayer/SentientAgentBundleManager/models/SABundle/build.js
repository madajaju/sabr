const path = require('path');

module.exports = {
    friendlyName: 'build',
    description: 'Build the Sentient Agent Bundle',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        buildID: {
            description: 'ID for the build of the bundle',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        let buildID = inputs.buildID || "None";
        // Create the vault.
        let vault = new SecureVault({name:`${obj.name}-${buildID}`});
        vault.store = new KeyStore({name:vault.name});
        obj.secureVault = vault;

        // Get each stream definition and grab the encryption and decryption keys for each.
        // Store the keys in the vault.
        for(let i in obj.inputs) {
            let input = obj.inputs[i];
            input.build();
            let key = input.decryptionKey;
            vault.store.addToKeys(key);
        }
        for(let i in obj.outputs) {
            let output = obj.outputs[i];
            output.build();
            let key = output.encryptionKey;
            vault.store.addToKeys(key);
        }

        obj.learningStream.build();
        vault.store.addToKeys(obj.learningStream.encryptionKey)
        vault.store.addToKeys(obj.learningStream.decryptionKey)
        obj.adminStream.build();
        vault.store.addToKeys(obj.adminStream.encryptionKey)
        vault.store.addToKeys(obj.adminStream.decryptionKey)
        // Now generate the encryption and keys for the bundle.
        vault.encrypt();
        obj.built();
    }
};
