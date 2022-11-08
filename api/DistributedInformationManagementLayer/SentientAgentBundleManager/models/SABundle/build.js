const path = require('path');
const {parse, stringify, toJSON, fromJSON} = require('flatted');

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
            input.addKeysToStore({keyType: 'decrypt', store: vault.store});
        }
        for(let i in obj.outputs) {
            let output = obj.outputs[i];
            output.build();
            output.addKeysToStore({keyType: 'encrypt', store: vault.store});
        }

        obj.learningStream.build();
        obj.learningStream.addKeysToStore({keyType: 'encrypt', store: vault.store});
        obj.learningStream.addKeysToStore({keyType: 'decrypt', store: vault.store});
        obj.adminStream.build();
        obj.adminStream.addKeysToStore({keyType: 'encrypt', store: vault.store});
        obj.learningStream.addKeysToStore({keyType: 'decrypt', store: vault.store});
        // Now generate the encryption and keys for the bundle.
        vault.encrypt();
        let builds = obj.builds;
        let numbuilds = builds.length;
        let build = new SABundleBuild({name: `${obj.name}-${numbuilds}`});
        obj.addToBuilds(build);
        build.encrypt({bundle: obj});
        obj.built();
        return build;
    }
};

function buildSecureVault(obj) {

}

function buildImages(obj) {

}

function definitionFile(obj) {

}

function buildPolicies(obj) {

}

function buildVolumes(obj) {

}
