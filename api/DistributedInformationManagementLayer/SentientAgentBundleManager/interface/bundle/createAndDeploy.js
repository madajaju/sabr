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
    friendlyName: 'createAndDeploy',
    description: 'Create and deploy the bundle',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the Sentient Agent Bundle',
            type: 'string', // string|boolean|number|json
            required: true
        },
        file: {
            description: 'file with the definition',
            type: 'file', // string|boolean|number|json
            required: true
        },
        policies: {
            description: 'The name of the policies to use in the deployment. Comma separated',
            type: 'file', // string|boolean|number|json
            required: true
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
        let sabr = new SABundle({name: inputs.name, file:inputs.file});

        let policies = createPolicies(inputs.policies);
        sabr.deploy({policies: policies});
        env.res.json({id:sabr.id, name:sabr.name});
    }
};

function createPolicies(policyDefinition) {
    let retval = [];
   let policies = eval(policyDefinition);
   for(let pname in policies) {
       retval.push(new ChannelCreationPolicy({name: pname, file: policies[pname]}));
   }
   return retval;
}
