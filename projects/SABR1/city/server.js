const express = require('express');
const server = express();
const bodyParser = require("body-parser");
const http = require('http').createServer(server);
const zips = require('./data/zip.js');
let port = process.env.AILTIRE_PORT || '3000';

try {
    setupExpress();
} catch (e) {
    // Deal with the fact the chain failed
    console.error(e);
}

function setupExpress() {
    // Here we are configuring express to use body-parser as middle-ware.
    server.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());

    server.get('/city', async (req, res) => {
        let zip = req.query.zip;
        if(zips.hasOwnProperty(zip)) {
            res.json(zips[zip]);
        } else {
            res.json("Error");
        }
        res.end();
    });
    app = http.listen(port);

}
