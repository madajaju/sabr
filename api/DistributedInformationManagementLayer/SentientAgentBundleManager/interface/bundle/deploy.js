

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
    description: 'Deploy the bundle',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        sabr: {
            description: 'The name of the SABR',
            type: 'string', // string|boolean|number|json
            required: true
        },
        policies: {
            description: 'The name of the policies to use in the deployment. Comma separated',
            type: 'string', // string|boolean|number|json
            required: true
        },
        parameters: {
            description: 'Parameters used for the instance deployment',
            type: 'string',
            required: false,
        }
    },

    exits: {
    },

    fn: function (inputs, env) {
        // inputs contains the obj for the this method.
        let sabr = SABundle.find(inputs.sabr);
        let policies = [];
        if (inputs.policies) {
            inputs.policies = inputs.policies.split(/,/);
            for (let i in inputs.policies) {
                let policy = ChannelCreationPolicy.find(inputs.policies[i]);
                policies.push(policy);
            }
        }
        let parameters = {};
        if (inputs.parameters) {
            inputs.parameters.split(',').forEach((parameter) => {
                const [key, value] = parameter.split('=');
                parameters[key] = value;
            });
        }
        sabr.deploy({policies: policies, parameters: parameters});
        return {id: sabr.id, name: sabr.name};
    }
};
