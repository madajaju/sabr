const path = require('path');

module.exports = {
    friendlyName: 'list',
    description: 'List the security profiles.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        env.res.json(global.classes);
        env.res.end("Done");
    }
};
