

/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

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
        let fid = id.replace(/:\//,'');
        let url = `http://${global.ailtire.config.pulsarAdmin}/admin/v2/${fid}/stats`;
        try {
            const get = bent(url, 'GET', 'json', 200);
            const response = await get('', {});
            for(let i in response.publishers) {
                let producer = response.publishers[i];
                console.log("ProducerName:", producer.producerName);
                if(global.producers && global.producers.hasOwnProperty(producer.producerName)) {
                    producer.sabr = global.producers[producer.producerName];
                }
            }
            env.res.json(response);
            env.res.end();
            return response;
        }
        catch(e){
            console.error("URL:", url);
            console.error("Topics could not be found: topic>", e);
            // throw new Error("Topics Failed:"+ e.message);
        }
    }
};
