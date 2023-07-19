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

module.exports = {
    friendlyName: 'build',
    description: 'Build the SAB with all of the elements including encrypting the bundle and the vault.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'The name of the Bundle.',
            type: 'string', // string|boolean|number|json
            required: false
        },
        id: {
            description: 'The id of the build.',
            type: 'string', // string|boolean|number|json
            required: false
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
        let bundle = SABundle.find(inputs.name);
        let id = inputs.id || bundle.name;
        if(!bundle) {
            throw new Error({type:'notFound', inputs:inputs});
        }
        let build = bundle.build({buildID:id});
        return {id:build.id};
    }
};
