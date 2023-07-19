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
const {Producer, logLevel } = require('pulsar-flex');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Output Channel Instance',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        // Create the consumer for the channel.
        obj.name = inputs.name;
        // Remove the .out before allocating the topic name.
        // This provides the channel instances to be unique for out and in.
        let topicName = "non-persistent://public/default/" + obj.name.replace(/\//g, '-').replace(/\.out$/, '');
        let pulsarHost = ailtire.config.pulsarHost;
        let sabrName = obj.name;
        let producer = new Producer({
            topic: topicName,
            discoveryServers: [pulsarHost],
            producerAccessMode: Producer.ACCESS_MODES.SHARED,
            logLevel: logLevel.INFO
        });
        obj.producer = producer;
        if(!global.hasOwnProperty('producers')) {
            global.producers = {};
        }
        global.producers[producer.producerName] = obj;
        return obj;
    }

};
