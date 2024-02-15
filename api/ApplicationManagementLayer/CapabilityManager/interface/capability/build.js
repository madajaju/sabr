

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
    friendlyName: 'build',
    description: 'Build a Capability',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the capability',
            type: 'string', // string|boolean|number|json
            required: false
        },
        id: {
            description: 'id of the capability',
            type: 'string', // string|boolean|number|json
            required: false
        },
    },

    exits: {
        success: (retval) => {
            return retval;
        },
        json: (retval) => {
            return {capability: retval};
        },
        notFound: (inputs) => {
            return `No Capability with the name #{inputs.name} could not be created!`;
        }
    },

    fn: function (inputs, env) {
        let capability;
        if (inputs.name) {
            capability = Capability.find(inputs.name);
        } else if (inputs.id) {
            capability = Capability.find(inputs.id);
        }
        if(!capability) {
            throw new Error({type:'notFound', inputs:inputs});
        }
        capability.build({name: "Auto"});
        return capability;
    }
};
