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


