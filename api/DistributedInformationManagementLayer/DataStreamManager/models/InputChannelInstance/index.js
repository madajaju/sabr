


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

class InputChannelInstance {
    static definition = {
        name: 'InputChannelInstance',
        description: 'This is the input to the transformation. Also known as the consumer of the data stream. This is' +
            ' a specialization of the DataStreamInstance.',
        extends: 'DataChannelInstance',
        attributes: {
            consumer: {
                type: 'ref',
                description: 'This is the actual consumer of the datastream. It is implemented using Pulsar or kafka.',
            },
        },
        associations: {
            transforms: {
                description: 'Transformations to process when data arrives in this channel.',
                type: 'DataTransform',
                cardinality: 'n',
            }
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    create: {
                        Created: { }
                    },
                }
            },
            Created: {
                description: 'The Channel is created but not connected to message queues',
                events: {
                    deploy: {
                        Deploying: {},
                    }
                }
            },
            Deploying: {
                description:'The channel is currently being deployed and connected to the message queues',
                events: {
                    deployed: {
                        Enabled: {},
                    },
                    failed: {
                        Failed: {}
                    }
                }
            },
            Enabled: {
                description: 'Channel can send information.',
                events: {
                    disable: {
                        Disabled: {}
                    },
                }
            },
            Disabled: {
                description: 'Channel cannot send information.',
                events: {
                    enable: {
                        Enabled: {}
                    }
                }
            },
            Failed: {
                description: 'State of the Channel if it failed to deploy!',
            }
        },
        view: {
            color: "#ffcc88",
            object2d: (options) => {
                // rectangle
                let material = {color: "#ffcc88", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#ffcc88; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="InputChannelInstance3D${i}">` +
                        `<a-cone height="15" radius-bottom="0" radius-top="8" position="-15 0 0" rotation="0 0 90" material="${materials[i]}" ></a-cone>` +
                        `<a-cylinder height="30" radius="4" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }

}

module.exports = InputChannelInstance;

