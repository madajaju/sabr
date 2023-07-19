
/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

class SecureVault {
    static definition = {
        name: 'SecureVault',
        description: 'The secure vault contains a SecureKey with the decryption keys to the encrypted' +
            ' keystore',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the securevalut',
            }
        },
        associations: {
            seed: {
                type: "Seed",
                cardinality: 1,
                composition: true,
                owner: true,
            },
            enclave: {
                type: "WorkingEnclave",
                cardinality: 1,
                composition: false,
                owner: true,
            },
            vault: {
                type: 'EncryptedVault',
                cardinality: 1,
                composition: true,
                owner: true
            },
        },
        view: {
            color: "#ffaaaa",
            object2d: (options) => {
                // pentagon
                let material = {color: "#ffaaaa", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#ffaaaa; transparent:true; opacity:0.70;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.70;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.70;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.70;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="SecureVault3D${i}">` +
                        `<a-box depth="10" height="20" width="20" material="${materials[i]}" ></a-box>` +
                        `<a-torus material="${materials[i]}" arc="180" radius="6" radius-tubular="1" position="0 10 0"></a-torus> ` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = SecureVault;

