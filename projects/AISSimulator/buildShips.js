

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


