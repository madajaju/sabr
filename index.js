const fs = require('fs');
// Check for node_modules directory. If it exists then continue. If not ask to run npm install.
if (!fs.existsSync('./node_modules')) {
    console.error('Error: you must run "npm install" first');
    return;
}
const server = require('ailtire');
const io_client = require('socket.io-client');
const process = require("process");
const bent = require('bent');
const AEvent = require('ailtire/src/Server/AEvent');

let host = process.env.AILTIRE_HOST || 'localhost'
let port = process.env.AILTIRE_PORT || 3000
let urlPrefix = process.env.AILTIRE_BASEURL || '/web'
let sabrDefinition = process.env.SABR_DEF;
let sabrName = process.env.SABR_NAME;
let pulsarHost = process.env.PULSAR_HOST || "localhost:6650";
let sabrPolicyDefs = process.env.SABR_POLICIES;
let provisionURL = process.env.SABR_PROVISION_URL;
let serviceID = process.env.SABR_SERVICE_ID;

server.listen({
    baseDir: '.',
    prefix: 'sabr',
    routes: {},
    host: host,
    urlPrefix: urlPrefix,
    listenPort: port,
    pulsarHost: pulsarHost,
    routes: {
        'deploy': 'deploy/show',
    },
    post: async (config) => {
        console.log("Config:", config);
        console.log("Starting SABR: ", sabrName);
        // Create the ServiceInstance object to handle everything.
        if (provisionURL) {
            let servicei = new ServiceInstance({name:sabrName});
            global._serviceInstance = servicei;
            const orgStdout = process.stdout.write.bind(process.stdout);
            process.stdout.write = (chunk, encoding, callback) => {
                if(typeof chunk === 'string') {
                    global._serviceInstance.stdout += chunk;
                }
                return orgStdout(chunk, encoding, callback);
            };
            const orgStderr = process.stderr.write.bind(process.stderr);
            process.stderr.write = (chunk, encoding, callback) => {
                if(typeof chunk === 'string') {
                    global._serviceInstance.stderr += chunk;
                }
                return orgStderr(chunk, encoding, callback);
            };
            /* let socket2 = io_client.connect('http://localhost:3000');
            socket2.on('connect', () => {
                socket2.emit("EdgeConnected");
            });
            socket2.on('ConnectedEdge', (data) => {
                console.log("EdgeConnected:", data);
            });
            */
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

            // Now call the restful service letting the provision server we are ready to provision.
            // let url = 'http://' + provisionURL + '/am/service';
            // console.log("Provisioning URL:", url);
            /* let params = `/deployed?service=${serviceID}&url=${host}:${port}${urlPrefix}`
            const put = bent(url, 'PUT', 'json', 200);
            (async () => {
                const response = await put(params, {});
                console.log(response.results);
                console.log("Completed!");
            })().catch(e => {
                // Deal with the fact the chain failed
                console.error("Registration Error:", e);
            });
             */
        }
    }

});

