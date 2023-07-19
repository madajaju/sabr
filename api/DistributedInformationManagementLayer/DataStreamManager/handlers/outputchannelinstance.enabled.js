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
    name: 'outputchannelinstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/sabr/diml/dsm/channel/deployed',
            fn: (data) => {
                if(data.obj) {
                    return {channel: data.obj.name, obj: data.obj};
                } else if(data._attributes) {
                    // Sabrs are reporting their producer information.
                    // store the producer's connection to the sabr.
                    if(!global.hasOwnProperty('producers')) {
                        global.producers = {};
                    }
                    global.producers[data._attributes.producerName] = data;
                    return {channel: null};
                }
            }
        },

    ]
};
