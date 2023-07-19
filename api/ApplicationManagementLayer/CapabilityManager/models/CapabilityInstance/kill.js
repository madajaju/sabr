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
const process = require("process");
const bent = require('bent');

module.exports = {
    friendlyName: 'kill',
    description: 'Kill a CapabilityInstance that is running in the ecosystem including all of the SABRs controlled' +
        ' by the capability.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        signal: {
            description: 'Signal of the kill command.',
            type: 'number', // string|boolean|number|json
            required: false
        },
    },
    exits: {},

    fn: function (obj, inputs) {
        // This function should send a kill signal to the running capability instance.
        // This in turn should kill all of the SABRs controlled by the capability.
        let owner = obj.owner;
        let signal = inputs.signal || 15;

        // Iterate over all the bundles in the capability and deploy them.
        for(let i in obj.bundles) {
            let bundle = obj.bundles[i];
            bundle.kill({signal:signal});
        }
        return obj;
    }
};
