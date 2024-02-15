

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

class DataChannelInstance {
    static definition = {
        name: 'DataChannelInstance',
        description: 'Data Channel Instance represents the connection of the services to the channel at the edge',
        uniq: (obj) => { return obj.name; },
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the data channel instance',
            },
            direction: {
                type: 'string',
                descrition: 'In or Out',
            },
            message: {
                type: 'string',
                description: 'Message string from the failed state.'
            }
        },
        associations: {
            design: {
                description: 'Parent of the channel Instance. This is the definition of the channel.',
                type: 'DataChannel',
                cardinality: 1,
            },
            stream: {
                description: 'This is the stream instance that is running the channel',
                type: 'DataStreamInstance',
                cardinality: 1,
            },
            transformInstance: {
                description: 'This is the instance of the transformation Service for the channel.',
                type: 'ServiceInstance',
                cardinality: 'n'
            },
            bundle: {
                description: 'This is the sabr instance',
                type: 'SABundleInstance',
                cardinality: 1
            }
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    create: {
                        Created: {}
                    }
                }
            },
            Created: {
                description: "DataChannelInstance is created",
                events: {
                    disable: {
                        Disabled: {}
                    },
                    destroy: {
                        Destroyed: {}
                    }
                },
            },
            Disabled: {
                description: "DataChannelInstance is disabled",
                events: {
                    enable: {
                        Enabled: {}
                    },
                    destroy: {
                        Destroyed: {}
                    }
                }
            },
            Enabled: {
                description: "DataChannelInstance is Enabled",
                events: {
                    disbale: {
                        Disabled: {}
                    }
                }
            },
            Destroyed: {
                description: "DataChannelInstance is destroyed",
            },
        },
        view: {
            color: "#00ffff",
            object2d: (options) => {
                // rectangle
                let material = {color: "#00ffff", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#00ffff; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="DataChannelInstance3D${i}">` +
                        `<a-cylinder height="30" radius="4" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = DataChannelInstance;

