
const fs = require(fs);
const spawn = require('child_process').spawnSync;
const fs = require('fs');
const path = require('path');


let proc = spawn('docker', ['services', 'ls', `madajaju/aisship${index}`, '-f', 'Dockerfile', '.' ], {
    env: process.env
});

let notDone = false;
let lines = proc.stdout.toString().split('\n');
for(let i in lines) {
    let line = lines[i];
    if(line.includes('ship')) {
        if(lines.includes('1/1')) {
            notDone = true;
        }
    }
}


let processLogFiles = () => {
    let proc = spawn('docker', ['services', 'ls', `madajaju/aisship${index}`, '-f', 'Dockerfile', '.' ], {
        env: process.env
    });
}
