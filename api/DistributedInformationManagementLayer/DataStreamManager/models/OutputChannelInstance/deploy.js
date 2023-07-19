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
    friendlyName: 'deploy',
    description: 'Deploy the output channel instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: async function (obj, inputs) {
        // inputs contains the obj for the this method.
        let producer = obj.producer;
        if(obj.state !== "Deploying") {
            console.log("Already deploying");
            return;
        }
        try {
            await producer.create();

            obj.producerName = producer._producerName;
            obj.deployed();
            if(obj.queue) {
                while(obj.queue.length > 0) {
                   obj.send(obj.queue.pop());
                }
            }

	    return Promise.resolve(1);
        }
        catch(e) {
            console.error("Error Creating Producer:", e);
            obj.failed(`Error Creating Producer for channel:${obj.name}, ${e}`);

        }
    }
};
