const fs = require('fs');
// Check for node_modules directory. If it exists then continue. If not ask to run npm install.
if (!fs.existsSync('./node_modules')) {
    console.error('Error: you must run "npm install" first');
    return;
}
console.log("Top1");
const server = require('ailtire');
console.log("Top2");
const io_client = require('socket.io-client');
console.log("Top3");
const process = require("process");
console.log("Top4");
const bent = require('bent');
console.log("Top5");
const AEvent = require('ailtire/src/Server/AEvent');
console.log("Top6");

let host = process.env.AILTIRE_HOST || 'localhost'
let port = process.env.AILTIRE_PORT || 3000
let urlPrefix = process.env.AILTIRE_BASEURL || '/web'
let sabrDefinition = process.env.SABR_DEF;
let sabrName = process.env.SABR_NAME;
let pulsarHost = process.env.PULSAR_HOST || "localhost:6650";
let pulsarAdmin = process.env.PULSAR_ADMIN || "localhost:8080";
let sabrPolicyDefs = process.env.SABR_POLICIES;
let provisionURL = process.env.SABR_PROVISION_URL;
let serviceID = process.env.SABR_SERVICE_ID;

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
        if (provisionURL) {
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

            // Add the provisioning Server as a listener on the websocket.
            AEvent.addServers([{
                url: provisionURL,
                pattern: '*',
                connectionEvent: 'serviceinstance.deployed',
                connectionData: {
                    obj: {
                        name: serviceID,
                        url: `${host}:${port}${urlPrefix}`
                    }
                }
            }]);
            // Need ability to handle AdminIn and send things on the output.
            let sabrDef = require(sabrDefinition);
            let sabr = new SABundle({name: sabrName, file: sabrDef});
            let policyDefs = require(sabrPolicyDefs);
            let policies = [];
            for (let pname in policyDefs) {
                let policydef = policyDefs[pname];
                let policy = new StreamPolicy({name: pname, file: policydef});
                policies.push(policy);
            }
            sabr.deploy({policies: policies});
        }
    }
});
