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
    friendlyName: 'update',
    description: 'Description of the action',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        capability: {
            description: 'Name or ID of the capability to update',
            type: 'string', // string|boolean|number|json
            required: true
        },
        file: {
            description: "File contains the updates for the capability",
            type: 'file',
            required: false
        }
    },

    exits: { },

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        let capability = Capability.find(inputs.capability);
        if(!capability) {
           throw new Error({type: 'notFound', inputs:inputs});
        }
        console.log("Update the capability");
        return capability;
    }
};
