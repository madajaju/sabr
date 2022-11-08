const path = require('path');
const bent = require('bent');

module.exports = {
    friendlyName: 'topics',
    description: 'Return the topics in the pulsar configuration',
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
        let url = `http://${global.ailtire.config.pulsarAdmin}/admin/v2/persistent/public/default`;
        try {
            const get = bent(url, 'GET', 'json', 200);
            const response = await get('', {});
            env.res.json(response);
            return response;
        }
        catch(e){
            console.error("URL:", url);
            console.error("Topics could not be found: topics>", e);
            // throw new Error("Topics Failed:"+ e.message);
        }
    }
};
