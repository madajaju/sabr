const fs = require('fs');
// Check for node_modules directory. If it exists then continue. If not ask to run npm install.
if(!fs.existsSync('./node_modules')) {
    console.error('Error: you must run "npm install" first');
    return;
}
const server = require('ailtire');
const process = require("process");
let host = process.env.AITIRE_HOST || 'localhost'
let port = process.env.AITIRE_PORT || 3000
let urlPrefix = process.env.AITIRE_BASEURL || '/web'
let sabrDefinition = process.env.SABR_DEF;
let sabrName = process.env.SABR_NAME;
let pulsarHost = process.env.PULSAR_HOST || "localhost:6650";
let sabr_policies = process.env.SABR_POLICIES;

server.listen( {
    baseDir: '.',
    prefix: 'sabr',
    routes: {
    },
    host: host,
    urlPrefix: urlPrefix,
    listenPort: port,
    pulsarHost: pulsarHost,
    post: (config) => {
        console.log("Starting SABR");
        if(sabrDefinition) {
            let sabrDef = require(sabrDefinition);
            let sabr = new SABundle({name:sabrName, file:sabrDef});
            sabr.deploy({});
            console.log("Starting SABR:", sabr.name);
        }
    }
});


