#!/usr/bin/env node

const program = require('commander');

const action = require('C:/Users/darre/work/sabr/node_modules/ailtire/src/interface/package/build.js');
const ActionHandler = require('C:/Users/darre/work/sabr/node_modules/ailtire/src/Server/Action.js');
global.ailtire = { config: require('C:/Users/darre/work/sabr/node_modules/ailtire/bin/lib/../../.ailtire.js') };
program
	.requiredOption('--env <string>', 'Environment to Build')
	.requiredOption('--name <string>', 'Name Package to build')
	.option('--recursive <boolean>', 'Rescurse to all sub packages');
program.parse(process.argv);
let results = ActionHandler.execute(action,program.opts(), {});
console.log(results);
