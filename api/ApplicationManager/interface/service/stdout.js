const path = require('path');

module.exports = {
    friendlyName: 'stdout',
    description: 'Return stdout of the service instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: (inputs, env) => {
        let service = global._serviceInstance;
        if(env.res) {
            env.res.json({stdout: service.stdout});
        }
        return service.stdout;
    }
};
