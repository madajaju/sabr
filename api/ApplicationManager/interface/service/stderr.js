const path = require('path');

module.exports = {
    friendlyName: 'stderr',
    description: 'Return stderr of the service instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: (inputs, env) => {
        let service = global._serviceInstance;
        if(env.res) {
            env.res.json({stderr: service.stderr});
        }
        return service.stdout;
    }
};
