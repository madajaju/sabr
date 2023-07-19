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
    name: 'inputstreaminstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/sabr/diml/dsm/stream/deployed',
            fn: (data) => {
                if(data.obj) {
                    console.log("ENABLED INPUT:", data.obj.name);
                    return {stream: data.obj.name};
                    // Other Side do not propagate.
                } else if(data._attributes) {
                    return {stream: null}
                }
            }
        },

    ]
};
