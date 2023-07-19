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
    description: 'Provision a Data Stream Instance which will create channel instances for deployment.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        policies: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'ChannelCreationPolicy',
            cardinality: 'n'
        },
    },

    exits: {},

    fn: (obj, inputs) => {
        let parent = obj.parent;
        for(let i in parent.channels) {
            let channel = parent.channels[i];
            let instance = new OutputChannelInstance({name: channel.name + '.out'});
            instance.bundle = obj.bundle;
            channel.addToInstances(instance);
            obj.addToChannels(instance);
        }
        return obj;
    }
};
