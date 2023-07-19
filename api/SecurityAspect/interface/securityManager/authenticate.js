/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

module.exports = {
    friendlyName: 'provisionEntity',
    description: 'Provision a Security Entity',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        deviceUID: {
            description: "DeviceUID of the SABR that is being authenticated",
            type: 'string',
            required: true,
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
        // make sure the target matches the targets for this edge device.
        let name = inputs.name;
        // Return the registration credentials
        let retval = new JWT({header:name});
        return retval;
    }
};
