const path = require('path');

module.exports = {
    friendlyName: 'setLevel',
    description: 'Set the level of operation',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        sabr: {
            description: 'The SABR to set the level',
            type: 'string', // string|boolean|number|json
            required: true
        },
        level: {
            description: 'The Level to set the SABR',
            type: 'string', // string|boolean|number|json
            required: true
        },
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
        env.res.end("Done");
    }
};
