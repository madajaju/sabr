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
    friendlyName: 'provision',
    description: 'Provision the service',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        service: {
            description: 'Name or ID of the service to provision',
            type: 'string', // string|boolean|number|json
            required: true
        },
        url: {
            description: 'URL of the service instance',
            type: 'string',
            required: true,
        }
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
        let service = ServiceInstance.find(inputs.service);
        if(service) {
            if(service._state !== "Provisioning" ) {
                service.url = inputs.url;
                service.provision();
            }
        }
        if(env && env.res) {
            env.res.json({status:"Done"});
        }
    }
};
