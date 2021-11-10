const path = require('path');
const bent = require('bent');

module.exports = {
    friendlyName: 'topic',
    description: 'Return the topics in the pulsar configuration',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        id: {
            type: 'string',
            description: 'ID of the topic. should be fully qualified',
            required: true
        }
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
        let id = inputs.id;
        let url = id.replace(/:\//,'');
        url = 'http://localhost:8081/admin/v2/' + url +'/stats';
        try {
            const get = bent(url, 'GET', 'json', 200);
            const response = await get('', {});
            for(let i in response.publishers) {
                let producer = response.publishers[i];
                if(global.producers.hasOwnProperty(producer.producerName)) {
                    producer.sabr = global.producers[producer.producerName];
                }
            }
            env.res.json(response);
            env.res.end();
            return response;
        }
        catch(e){
            console.error("Topics could not be found:", e);
            throw new Error("Topics Failed:"+ e.message);
        }
    }
};
