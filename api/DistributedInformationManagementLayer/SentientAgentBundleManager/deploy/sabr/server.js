

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

const fs = require('fs');
// Check for node_modules directory. If it exists then continue. If not ask to run npm install.
if (!fs.existsSync('./node_modules')) {
    console.error('Error: you must run "npm install" first');
    return;
}
const server = require('ailtire');
const process = require("process");
const AEvent = require('ailtire/src/Server/AEvent');

let host = process.env.AILTIRE_HOST || 'localhost'
let port = process.env.AILTIRE_PORT || 3000
let urlPrefix = process.env.AILTIRE_BASEURL || '/web'
let sabrDefinition = process.env.SABR_DEF;
let sabrName = process.env.SABR_NAME;
let pulsarHost = process.env.PULSAR_HOST || "localhost:6650";
let pulsarAdmin = process.env.PULSAR_ADMIN || "localhost:8080";
let sabrPolicyDefs = process.env.SABR_POLICIES;
let serviceID = process.env.SABR_SERVICE_ID;
let sabrParameters = process.env.SABR_PARAMETERS || "";

server.listen({
    baseDir: '.',
    prefix: 'sabr',
    host: host,
    urlPrefix: urlPrefix,
    listenPort: port,
    pulsarHost: pulsarHost,
    pulsarAdmin: pulsarAdmin,
    routes: {
        'deploy': 'deploy/show',
    },
    post: async (config) => {
        console.log("Config:", config);
        console.log("Starting SABR: ", sabrName);

        // Create the ServiceInstance object to handle everything.
        // Handle the Service Instance getting started.
        let servicei = new ServiceInstance({name: sabrName});
        global._serviceInstance = servicei;
        const orgStdout = process.stdout.write.bind(process.stdout);
        process.stdout.write = (chunk, encoding, callback) => {
            if (typeof chunk === 'string') {
                global._serviceInstance.stdout += chunk;
            }
            return orgStdout(chunk, encoding, callback);
        };
        const orgStderr = process.stderr.write.bind(process.stderr);
        process.stderr.write = (chunk, encoding, callback) => {
            if (typeof chunk === 'string') {
                global._serviceInstance.stderr += chunk;
            }
            return orgStderr(chunk, encoding, callback);
        };

        // Need ability to handle AdminIn and send things on the output.
        let sabrDef = require(sabrDefinition);
        let sabr = new SABundle({name: sabrName, file: sabrDef});
        let policyDefs = require(sabrPolicyDefs);
        let policies = [];
        for (let pname in policyDefs) {
            let policydef = policyDefs[pname];
            let policy = new ChannelCreationPolicy({name: pname, file: policydef});
            policies.push(policy);
        }
        let parameters = {};
        if (sabrParameters) {
            sabrParameters.split(',').forEach((parameter) => {
                const [key, value] = parameter.split('=');
                parameters[key] = value;
            });
        }
        console.log("SABR Parameters:", parameters);
        await sabr.deploy({policies: policies, parameters: parameters});
	console.log("Done calling sabr.deploy in server.js");
    }
});
