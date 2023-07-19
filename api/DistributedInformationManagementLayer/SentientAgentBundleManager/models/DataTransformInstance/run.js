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
    friendlyName: 'run',
    description: 'Run the transform on the data and update the properties.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'ChannelCreationPolicy',
            cardinality: 'n'
        },
        properties: {
            description: 'Metadata for the data. Contains the heritage of the data.',
            type: 'json',
            required: true,
        }
    },

    exits: {},

    fn: function (obj, inputs) {
        if(!inputs.properties.hasOwnProperty('heritage')) {
            inputs.properties.heritage = [];
        }
        let hData = {date: new Date(), transform: obj.name, input: inputs.data};
        inputs.properties.heritage.push(hData);
        let output = obj.fn(inputs.data, inputs.properties);
        if(output) {
            for (let i in obj.outputs) {
                let outStream = obj.outputs[i];
                outStream.send(output);
            }
        }
        return true;
    }
};
