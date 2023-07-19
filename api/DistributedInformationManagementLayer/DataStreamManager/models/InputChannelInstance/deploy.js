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
    description: 'Deploy the channel instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {},

    exits: {},

    fn: async function (obj, inputs) {
        // inputs contains the obj for this method.
        let consumer = obj.consumer;

        // Need to wait for the consumer before calling run.
	let retval = undefined;
        try {
            await consumer.subscribe();
            await consumer.run({
                onMessage: async ({ack, message, properties, redeliveryCount}) => {
                    await ack(); // Default is individual ack
                    // await ack({type: Consumer.ACK_TYPES.CUMULATIVE});
                    let myMessage = message.toString('utf-8');
                    // let myProps = properties.toString('utf-8');
                    obj.stream.process({data: myMessage, properties: properties, channel: obj});
                }, autoAck: false, // specify true in order to use automaticAck
            });
            obj.deployed();
        } catch (e) {
            console.error("Error during deploy of Channel Instance:", e);
            // obj.message = `Error Creating Consumer for channel:${obj.name}, ${e}`;
            obj.failed({message: `Error Creating Consumer for channel:${obj.name}, ${e}`});
        }
        return Promise.resolve(1);
    }
};
