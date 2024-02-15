

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

const path = require('path');
const {parse, stringify, toJSON, fromJSON} = require('flatted');
const AService = require('ailtire/src/Server/AService');

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
        _buildSecureVault(obj, inputs);
        let builds = obj.builds;
        let numbuilds = builds.length;
        let build = new SABundleBuild({name: `${obj.name}-${numbuilds}`});
        obj.addToBuilds(build);
        build.encrypt({bundle: obj});
        obj.built();
        return build;
    }
};

function _buildSecureVault(obj, inputs) {
    let buildID = inputs.buildID || "None";
    // Create the vault.
    let vault = new SecureVault({name:`${obj.name}-${buildID}`});
    vault.vault = new EncryptedVault();
    obj.secureVault = vault;

    // Get Registration Creds from the Security Manager
    let creds = AService.call('sa.securityManager.getRegistrationCreds', {name: obj.name});
    // Get the BootstrapKey from the Security Manager
    let bskey = AService.call('sa.securityManager.getBootStrapKey', {name:obj.name});

    // Register the SABR entity to the Security Manager . Store the entityUID into the SABR.
    let entityUID = AService.call('sa.securityManager.registerEntity', {name:obj.name});

    // Generate a Unique Authentication for the SABR. Store it in the Secure Vault for the SABR.
    let uauthKey = SecurityKey.generateKey({name: `${obj.name}-AuthKey`});
    vault.seed = new Seed({registrationCreds: creds, bootstrap: bskey, uauth: uauthKey});
    AService.call('sa.securityManager.provisionEntity', {name:obj.name, uauth: uauthKey});


    // Get each stream definition and grab the encryption and decryption keys for each.
    // Store the keys in the vault.
    for(let i in obj.inputs) {
        let input = obj.inputs[i];
        // input.build();
        // Ask the Capability Manager for the Stream information.
        let keys = AService.call('sa.securityManager.getStreamKeys', {name:input.name});
        vault.vault.addToStreams(keys);
    }
    for(let i in obj.outputs) {
        let output = obj.outputs[i];
        // output.build();
        let keys = AService.call('sa.securityManager.getStreamKeys', {name:output.name});
        vault.vault.addToStreams(keys);
    }
    // obj.learningStream.build();
    // obj.adminStream.build();
    let keys = AService.call('sa.securityManager.getStreamKeys', {name:obj.learningStream.name});
    vault.vault.addToStreams(keys);
    keys = AService.call('sa.securityManager.getStreamKeys', {name:obj.adminStream.name});
    vault.vault.addToStreams(keys);

    // Now generate the encryption and keys for the bundle.
    vault.encrypt();
}

async function _buildImages(obj) {
    // Get the images for the SABR so they can be encrypted.

}

async function _buildDefinition(obj) {
    // Get the definition file for the sabr.
    // Get the policies
    // Get any volumes in the SABR image
}

async function _buildPolicies(obj) {

}

function _buildVolumes(obj) {

}
