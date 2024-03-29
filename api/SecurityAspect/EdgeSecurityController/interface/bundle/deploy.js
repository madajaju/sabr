

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

