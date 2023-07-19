/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
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
