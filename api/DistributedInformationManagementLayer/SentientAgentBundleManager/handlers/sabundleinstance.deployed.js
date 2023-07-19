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
    name: 'sabundleinstance.deployed',
    handlers: [
        {
            description: 'Bundle Instance Deployed for the SABR',
            fn: (data) => {
                // This event is happening on the same server.
                if(data.obj) {
                    console.log("---------------------SABRI PARENT:", data.obj.parent);
                    if(data.obj.parent) {
                        data.obj.parent.deployed();
                    }
                    return data.obj;
                    // Run on another server.
                } else if(data._attributes) {
                    let sabri = new SABundleInstance({name: data._attributes.name});
                    let sabr = new SABundle({name: data._attributes.parent._attributes.name});
                    sabri.running();
                    sabr.deployed();
                }
            }
        },

    ]
};
