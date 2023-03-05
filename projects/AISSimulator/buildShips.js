const {program} = require('commander');
const spawn = require('child_process').spanSync;
const fs = require('fs');
const path = require('path');
program
.option('-s, --ships <files>')
.option('-d, --dir <dirname>')

program.parse();
const options = program.opts();

let sdir = options.dir;
let ships = options.ships.split(',');


for(let i in ships) {
    let shipfile = path.resolve(`${dirname}/${ships[i]}.csv`);
    fs.copyFileSync(shipfile,"AISShip/ship.csv");
    let proc = spawn.exec('docker', ['build', '-t', `aisship${ships[i]}`, '-f', 'Dockerfile', '.' ], {
            cwd: 'AISShip',
            stdio: [process.stdin, process.stdout, process.stderr],
            env: process.env
        });

    console.log(proc.status);
}


