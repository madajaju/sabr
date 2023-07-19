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
    description: 'Build a Capability',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the capability',
            type: 'string', // string|boolean|number|json
            required: false
        },
        id: {
            description: 'id of the capability',
            type: 'string', // string|boolean|number|json
            required: false
        },
    },

    exits: {
        success: (retval) => {
            return retval;
        },
        json: (retval) => {
            return {capability: retval};
        },
        notFound: (inputs) => {
            return `No Capability with the name #{inputs.name} could not be created!`;
        }
    },

    fn: function (inputs, env) {
        let capability;
        if (inputs.name) {
            capability = Capability.find(inputs.name);
        } else if (inputs.id) {
            capability = Capability.find(inputs.id);
        }
        if(!capability) {
            throw new Error({type:'notFound', inputs:inputs});
        }
        capability.build({name: "Auto"});
        return capability;
    }
};
