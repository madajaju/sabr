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
    friendlyName: 'provision',
    description: 'Provision the service with the provision script.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: async (obj, inputs) => {

        let provisionScript = obj.parent.provisionScript;
        try {
            let response = await provisionScript(obj);
            if(response) {
                obj.provisioned();
            }
        }
        catch(e){
            console.error("Provision failed:", e);
            obj.failed();
        }
        return obj;

    }
};
