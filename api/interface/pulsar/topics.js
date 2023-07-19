/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

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
