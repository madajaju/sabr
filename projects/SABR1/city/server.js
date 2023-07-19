/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

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
