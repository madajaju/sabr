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
    description: 'Create Environment for the system',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'Name of the environment to Create',
            type: 'string', // string|boolean|number|json
            required: false
        },
        file: {
            description: "File of the environment definition",
            type: 'file',
            required: false
        }
    },

    exits: {
    },

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        let environment = new Environment({name: inputs.name});
        return environment;
    }
};
