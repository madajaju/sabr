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
const {spawn} = require('child_process');
const AEvent = require('ailtire/src/Server/AEvent');

module.exports = {
    friendlyName: 'deployed',
    description: 'Notification that the service is deployed',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        service: {
            description: 'ID of the Service that is ready',
            type: 'string', // string|boolean|number|json
            required: true,
        },
        url: {
            description: 'URL or streamID of the service that is ready',
            type: 'string',
            required: false
        },
    },

    exits: {},

    fn: (inputs, env) => {
        let serviceid = inputs.service;
        let url = inputs.url;
        let service = ServiceInstance.find(serviceid);
        if(service) {
            service.url = url;
            service.deployed();
        }
        AEvent.addServers([{url: inputs.url, pattern: '*'}]);
        if(env.res) {
            env.res.json({results: "Complete"});
        }
        return ;
    }
};
