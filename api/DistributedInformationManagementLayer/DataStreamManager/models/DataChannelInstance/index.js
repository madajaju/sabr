/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
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

