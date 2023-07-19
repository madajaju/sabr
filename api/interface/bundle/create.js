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
    friendlyName: 'create',
    description: 'Description of the action',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'Name of the apaplication to Create',
            type: 'string', // string|boolean|number|json
            required: false
        },
        file: {
            description: "File of the application definition",
            type: 'file',
            required: false
        }
    },

    exits: {
        success: (retval) => {
            return retval;
        },
        json: (retval) => {
            return {bundle: retval};
        },
        notFound: (inputs) => {
            return `No Bundle with the name #{inputs.name} was found!`;
        }
    },

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        let bundle = new SABundle({name: inputs.name, file: inputs.file});
        if(!bundle) {
            throw new Error({type:'notFound', inputs: inputs});
        }
        return bundle;
    }
};
