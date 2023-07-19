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
    friendlyName: 'deploy',
    description: 'Deploy a SAB bundle that is passed in.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: "Name of the bundle to deploy",
            type: 'string',
            required: true,
        },
        version: {
            description: "Version of the bundle",
            type: 'string',
            required: true,
        },
        target: {
            description: "Target Devices to deploy the bundle.",
            type: 'string',
            required: true,
        },
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: async function (inputs, env) {
        // make sure the target matches the targets for this edge device.
        let target = inputs.target;
        // Find the securityKey based on the Target.
        // Get the store for the target.
        let store = KeyStore.find({name: inputs.target});
        if(!store) {
            if(env.res) {
                env.res.status(404).send("Target Not Found!");
            }
            return;
        }
        let key = null;
        for(let i in store.keys) {
            if(store.keys[i].name === `${inputs.name}-${inputs.version}`) {
                key = store.keys[i];
            }
        }
        if(!key) {
            if(env.res) {
                env.res.status(404).send("Bundle Not Found!");
            }
            return;
        }

        // Store the files in a directory with the bundleName and Version.
        let bundleName = inputs.name;
        let version = inputs.version;
        let dirname = path.resolve(`./.repo/${bundleName}/${version}`);
        if(!fs.existsSync(dirname)) { fs.mkdirSync(dirname, {recursive: true}); }
        await uploadBlob(env.req, key, dirname);
    }
};

const uploadBlob = (req, securityKey, dirPath) => {
    return new Promise((resolve, reject) => {
        const extractor = tar.x({ C: dirPath });
        const decryptor = crypto.createDecipheriv('aes256', securityKey.value, securityKey.iv);
        // With the open - event, data will start being written
        // from the request to the stream's destination path
        stream.on('open', () => {
            console.log('Stream open ...  0.00%');
            req.pipe(stream).pipe(decryptor).pipe(extractor).on('finish', () => { resolve(dirPath); });
        });

        // Drain is fired whenever a data chunk is written.
        // When that happens, print how much data has been written yet.
        stream.on('drain', () => {
            const written = parseInt(stream.bytesWritten);
            const total = parseInt(req.headers['content-length']);
            const pWritten = ((written / total) * 100).toFixed(2);
            console.log(`Processing  ...  ${pWritten}% done`);
        });

        // When the stream is finished, print a final message
        // Also, resolve the location of the file to calling function
        stream.on('close', () => {
            console.log('Processing  ...  100%');
        });
        // If something goes wrong, reject the primise
        stream.on('error', err => {
            console.error(err);
            reject(err);
        });
    });
}

