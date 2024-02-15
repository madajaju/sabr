

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
const process = require("process");
const bent = require('bent');

module.exports = {
    friendlyName: 'kill',
    description: 'Kill a CapabilityInstance that is running in the ecosystem including all of the SABRs controlled' +
        ' by the capability.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        signal: {
            description: 'Signal of the kill command.',
            type: 'number', // string|boolean|number|json
            required: false
        },
    },
    exits: {},

    fn: function (obj, inputs) {
        // This function should send a kill signal to the running capability instance.
        // This in turn should kill all of the SABRs controlled by the capability.
        let owner = obj.owner;
        let signal = inputs.signal || 15;

        // Iterate over all the bundles in the capability and deploy them.
        for(let i in obj.bundles) {
            let bundle = obj.bundles[i];
            bundle.kill({signal:signal});
        }
        return obj;
    }
};
