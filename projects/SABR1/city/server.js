

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
