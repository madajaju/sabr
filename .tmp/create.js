#!/usr/bin/env node

const program = require('commander');

const action = require('C:/Users/dwpulsip/AppData/Roaming/npm/node_modules/ailtire/src/interface/actor/create.js');
const ActionHandler = require('C:/Users/dwpulsip/AppData/Roaming/npm/node_modules/ailtire/src/Server/Action.js');
global.ailtire = { config: require('C:/Users/dwpulsip/AppData/Roaming/npm/node_modules/ailtire/bin/lib/../../.ailtire.js') };
program
	.requiredOption('--name <string>', 'The name of the actor');
program.parse(process.argv);
let results = ActionHandler.execute(action,program.opts(), {});
console.log(results);
