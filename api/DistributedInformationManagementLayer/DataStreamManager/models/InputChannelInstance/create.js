

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
const {Consumer, logLevel } = require('pulsar-flex');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Input Channel Instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        // Create the consumer for the channel.
        obj.name = inputs.name;
        obj.bunde = inputs.bundle;

        // Remove the suffix of the name so the same topic is used for in and out.
        let topicName = "non-persistent://public/default/" + obj.name.replace(/\//g, '-').replace(/\.in$/, '');
        let pulsarHost = ailtire.config.pulsarHost;
        let subscriptionName = inputs.bundle.parent.name + '-' + inputs.parent.name + 'Subscription';
        let sabrName = inputs.bundle.name + '-' + inputs.name + '-Consumer';
        let consumer =
            new Consumer({
            topic: topicName,
            discoveryServers: [pulsarHost],
            subscription: subscriptionName,
            subType: Consumer.SUB_TYPES.FAILOVER,
            consumerName: sabrName,
            receiveQueueSize: 1000,
            logLevel: logLevel.ERROR,
        });
        obj.consumer = consumer;
        return obj;
    }

};
