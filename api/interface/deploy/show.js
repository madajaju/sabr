const path = require('path');
const bent = require('bent');
const Renderer = require("ailtire/src/Documentation/Renderer");

module.exports = {
    friendlyName: 'show',
    description: 'Show the main deployment page.',
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

    fn: async function (inputs, env) {
        // inputs contains the obj for the this method.
        env.res.end(Renderer.render('deployed', './deployed', {
            app: {name: global.ailtire.config.name},
            name: global.ailtire.config.name,
        }));
    }
};
