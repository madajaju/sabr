const AEvent = require('ailtire/src/Server/AEvent');

module.exports = {
    friendlyName: 'kill',
    description: 'Service is being killed',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: (inputs, env) => {
        let serviceid = inputs.service;
        let serviceinstance = global._serviceInstance;
        AEvent.emit('serviceinstance.killed', serviceinstance)
        process.exit();
    }
};
