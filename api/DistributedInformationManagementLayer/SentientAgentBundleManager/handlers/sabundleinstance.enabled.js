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
    name: 'sabundleinstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            fn: (data) => {
                // This event is happening on the same server.
                if(data.obj) {
                        let apps = data.obj.parent.applications;
                        for (let aname in apps) {
                            let app = apps[aname];
                            let fn = app.fn;
                            // Need to pass the parameters as well
                            // fn(data.obj, );
                        }
                        data.obj.adminOutStream.send({
                            data: {
                                event: 'sabundleinstance.enabled',
                                bundle: data.obj.id,
                                state: 'Enabled,'
                            },
                            properties: {}
                        });
                    return data.obj;
                    // Run on another server.
                } else if(data._attributes) {
                    let bundleName = data._associations.parent._attributes.name;
                    let sabr = SABundle.find(bundleName);
                    let sabri = SABundleInstance.find(data._attributes.name);
                    if(sabr && sabri) {
                        sabr.addToInstances(sabri);
                        sabri.running();
                        sabr.deployed();
                    } else {
                        console.error("Could not find ", data._attributes.name);
                    }
                }

            }
        },

    ]
};
