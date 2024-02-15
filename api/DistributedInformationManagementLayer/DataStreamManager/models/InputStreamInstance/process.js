

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
    friendlyName: 'process',
    description: 'Process data on the stream',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Data to process.',
            type: 'json', // string|boolean|number|json
            required: true,
        },
        properties: {
            description: 'Properties of the data',
            type: 'json',
            required: true
        },
        channel: {
            description: 'Channel the data came on',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'InputChannelInstance',
            cardinality: 1
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // Need to add logic around which channel the data has come from.
        // Or maybe to go get the data.

        // Convert from string to json.
        // Look at all of the properties and convert them to objects if they have the .JSON Tag.
        let myProps = {};
        for(let pname in inputs.properties) {
            if(pname.match(/\.JSON$/)) {
                let nname = pname.replace(/\.JSON$/, '');
                myProps[nname] = JSON.parse(inputs.properties[pname]);
            } else {
                myProps[pname] = inputs.properties[pname];
            }
        }
        inputs.properties = myProps;
	inputs.properties.inputStream = obj.name.replace(/\..*$/,'');
	inputs.properties.inputChannel = inputs.channel.name.replace(".in", "");

        // inputs.properties = JSON.parse(inputs.properties);
        inputs.data = JSON.parse(inputs.data);
        if(inputs.data) {
            for (let tname in obj.transforms) {
                let trans = obj.transforms[tname];
                trans.run({data: inputs.data, properties: inputs.properties});
            }
        }
        return obj;
    }
};
