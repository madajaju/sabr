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
    description: 'Deploy a SABundle',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        policies: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'ChannelCreationPolicy',
            cardinality: 'n'
        },
        parameters: {
            description: 'Parameters for the Instance',
            type: 'json', // string|boolean|number|json
            required: false,
        },
    },

    exits: {},

    fn: async (obj, inputs) => {
        // For each Stream in the Bundle create a streaminstance.
        // Pass the policies to the stream so appropriate channels are created.
        // Create a SABundleInstance with all of the StreamInstances attached.
        if(inputs.policies) {
            for(let i in inputs.policies)  {
                obj.addToPolicies(inputs.policies[i]);
            }
        }
        let numi = obj.instances.length;
        let instance = new SABundleInstance({name:obj.name + '-' + numi, parent: obj});
        obj.addToInstances(instance);
	console.log("Deploing Bundle Instance", instance.name);
        await instance.deploy({policies: obj.policies, parameters: inputs.parameters});
        console.log("SABundle Deploy Complete");
        return new Promise((resolve, reject) => {resolve(instance);});
    }
};
