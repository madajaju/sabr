


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

