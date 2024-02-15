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
    friendlyName: 'sendBatch',
    description: 'SendBatch data to the Data Stream Instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Data to send to the data stream',
            type: 'json', // string|boolean|number|json
            required: true,
        },
    },
    exits: {},
    fn: function (obj, inputs) {
        let messages = [];
        for(let i in inputs.data) {
            let message = inputs.data[i];
            let payload = JSON.stringify(message.payload);
            let myProps = {};
            for(let pname in message.properties) {
                let prop =message.properties[pname];
                let proptype = typeof prop;
                if(proptype === 'Number' || proptype === 'String' || proptype === 'Boolean' || proptype === 'BigInt') {
                    myProps[pname] = prop;
                } else {
                    // .JSON tells the InputStreamInstance, (the other side) how to handle the string.
                    myProps[pname +'.JSON'] = JSON.stringify(prop);
                }
            }
            messages.push({payload:payload, properties:myProps});
        }
        for(let i in obj.channels) {
            let channel = obj.channels[i];
            channel.sendBatch({data:{messages:messages}});
        }
        return obj;
    }
};
