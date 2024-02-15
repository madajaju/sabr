

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
const spawn = require('child_process').spawnSync;
const fs = require('fs');
const tar = require('tar');
const crypto = require('crypto');
const {once} = require('events');
const bent = require('bent');


const isDirectory = source => fs.lstatSync(source).isDirectory();
const isFile = source => !fs.lstatSync(source).isDirectory();

module.exports = {
    friendlyName: 'store',
    description: 'Store a Key for the bundle decryption',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        target: {
            description: "Directory to perform the build.",
            type: 'string',
            required: true,
        },
        bundle: {
            description: "Recursive build from the directory down.",
            type: 'string',
            required: false,
        },
        version: {
            description: "Version of the bundle encrypted.",
            type: 'string',
            type: true
        },
        key: {
            description: "Key to be used for the unbundling of the SAB build.",
            type: 'string',
            required: true
        },
        iv: {
            description: "IV of the Key for the decryption.",
            type: 'string',
            required: true,
        }
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: async function (inputs, env) {
        let store = KeyStore.find({name: inputs.target});
        if(!store) {
            store = new KeyStore({name: inputs.target});
        }
        let key = store.addToKeys({name: `${inputs.bundle}-${inputs.version}`, value: inputs.key, iv: inputs.iv});
        console.log("Stored Key:", key.name);
        if(env.res) {
            env.res.status(200).send("Key Stored");
            env.res.end();
        }
        return true;
    }
};
