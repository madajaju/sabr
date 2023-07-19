/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

const AEvent = require('ailtire/src/Server/AEvent');

module.exports = {
    friendlyName: 'kill',
    description: 'Service is being killed',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: (inputs, env) => {
        let serviceid = inputs.service;
        let serviceinstance = global._serviceInstance;
        AEvent.emit('serviceinstance.killed', serviceinstance)
        process.exit();
    }
};
