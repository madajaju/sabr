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
    name: 'serviceinstance.deployed',
    handlers: [
        {
            description: 'Handle the service deployed and make sure it is ready to be provisioned.',
            action: '/aml/am/service/provision',
            fn: (data) => {
                if(data.obj) {
                    let service = ServiceInstance.find(data.obj.name);
                    if ( service && service.state && service.state !== "Deployed") {
                        service.url = data.obj.url;
                        service.deployed();
                    }
                    return {service: data.obj.name, url: data.obj.url};
                }
            }
        },

    ]
};
