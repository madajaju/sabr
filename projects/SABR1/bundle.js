

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

module.exports = {
    name: 'sabr1',
    outputs: {
        StreamA: {},
        StreamB: {}
    },
    transforms: {
        mainTransform: {
            inputs: [],
            outputs: ['StreamA', 'StreamB'],
            fn: (data, props) => {
                return {data: {message: "Hello World-" + data.message}, properties: props};
            }
        }
    },
    applications: {
        myApp: (bundle) => {
            for (let i = 0; i < 10; i++) {
                for (let oname in bundle.outputs) {
                    let output = bundle.outputs[oname];
                    if (output) {
                        output.send({data: {message: "Bundle1 created"}, properties: {parent: 'App Generated'}});
                    }
                }
            }
        }
    },
    images: {
        sabr_ziplookup: {
            dir: './city',
            file: './city/Dockerfile',
            tag: 'sabr_ziplookup',
            env: {}
        },
        sabr_citylookup: {
            dir: './zip',
            file: './zip/Dockerfile',
            tag: 'sabr_citylookup',
            env: {}
        },
        sabr_service: {}
    },
    services: {
        sabr_zipcodeLookup: {
            image: "sabr_ziplookup",
            volumes: {
                lookupTable: {source: "./data", target: "/usr/src/app/data"}
            },
            interface: {
                "/zip": {path: '/zip', port: 3002, protocol: "http"},
            },
            policies: {},
        },
        sabr_citylookup: {
            image: "sabr_cityLookup",
            volumes: {
                lookupTable: {source: "./data", target: "/usr/src/app/data"}
            },
            interface: {
                "/city": {path: '/city', port: 3001, protocol: "http"},
            },
            policies: {},
        },
    }
}
