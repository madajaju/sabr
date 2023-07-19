/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

const {program} = require('commander');
const spawn = require('child_process').spawnSync;
const fs = require('fs');
const path = require('path');
program
.option('-s, --ships <shipNames>')
.option('-d, --dir <dirname>')
.option('-a, --all')
.option('-g, --groups <number>')

program.parse();
const options = program.opts();

let sdir = options.dir;
let group = options.groups || 1;
let ships = [];
if(options.hasOwnProperty('ships')) {
	let ships = options.ships.split(',');
}
if(options.hasOwnProperty('all')) {
  ships = fs.readdirSync(sdir).map( (item) => {return item.replace(".csv","");});
}
console.log("SHIPS:", ships);
let index = 0;
for(let i in ships) {
	index++;
	let shipfile = path.resolve(`${sdir}/${ships[i]}.csv`);
	let str = fs.readFileSync(shipfile,'utf-8');
	fs.writeFileSync("AISShip/ship.csv", str, {flag:"a+"});
	if(index % group === 0) {
		console.log("Building:", index);
	    let proc = spawn('docker', ['build', '-t', `madajaju/aisship${index}`, '-f', 'Dockerfile', '.' ], {
            cwd: 'AISShip',
            stdio: [process.stdin, process.stdout, process.stderr],
            env: process.env
		});
	    proc = spawn('docker', ['push', `madajaju/aisship${index}` ], {
            cwd: 'AISShip',
            stdio: [process.stdin, process.stdout, process.stderr],
            env: process.env
		});
            // create a clean file
            fs.writeFileSync("AISShip/ship.csv", "");
        }
}


