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
