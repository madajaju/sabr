

/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
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
