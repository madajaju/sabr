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
    friendlyName: 'launched',
    description: 'Notification that the Service Instance was launched',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        pid: {
            description: 'Process id of the service instance',
            type: 'string', // string|boolean|number|json
        },
    },

    exits: {},

    fn: (obj, inputs) => {
        // For each Stream in the Bundle create a streaminstance.
        // Pass the policies to the stream so appropriate channels are created.
        // Create a SABundleInstance with all of the StreamInstances attached.
        obj.pid = inputs.pid;
        return obj;
    }
};
