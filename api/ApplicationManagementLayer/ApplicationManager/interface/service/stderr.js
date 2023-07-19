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
    friendlyName: 'stderr',
    description: 'Return stderr of the service instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: (inputs, env) => {
        let service = global._serviceInstance;
        if(env.res) {
            env.res.json({stderr: service.stderr});
        }
        return service.stdout;
    }
};
