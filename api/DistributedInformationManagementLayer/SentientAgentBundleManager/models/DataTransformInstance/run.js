

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
