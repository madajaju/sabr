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
    friendlyName: 'deploy',
    description: 'Deploy the bundle',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        sabr: {
            description: 'The name of the SABR',
            type: 'string', // string|boolean|number|json
            required: true
        },
        policies: {
            description: 'The name of the policies to use in the deployment. Comma separated',
            type: 'string', // string|boolean|number|json
            required: true
        },
        parameters: {
            description: 'Parameters used for the instance deployment',
            type: 'string',
            required: false,
        }
    },

    exits: {
    },

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        let sabr = SABundle.find(inputs.sabr);
        let policies = [];
        if (inputs.policies) {
            inputs.policies = inputs.policies.split(/,/);
            for (let i in inputs.policies) {
                let policy = ChannelCreationPolicy.find(inputs.policies[i]);
                policies.push(policy);
            }
        }
        let parameters = {};
        if (inputs.parameters) {
            inputs.parameters.split(',').forEach((parameter) => {
                const [key, value] = parameter.split('=');
                parameters[key] = value;
            });
        }
        sabr.deploy({policies: policies, parameters: parameters});
        return {id: sabr.id, name: sabr.name};
    }
};
