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
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the build',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        let name = inputs.name || `${obj.name}-build`;

        // iterate through the SABMs and build them.
        for(let bname in obj.bundles) {
            let bundle = obj.bundles[bname];
            bundle.build({name:name});
        }
        obj.results = true;
        obj.built();
        return obj;
    }
};
