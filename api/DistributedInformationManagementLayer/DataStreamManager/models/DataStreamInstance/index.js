
/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

class DataStreamInstance {
    static definition = {
        name: 'DataStreamInstance',
        description: 'This represents a data stream that has been deployed and is running in the system.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the Data Stream',
            },
            direction: {
                type: 'string',
                description: 'In or Out',
            }
        },
        associations: {
            parent: {
                description: 'This is the parent of the data stream instance.',
                type: 'DataStream',
                cardinality: 1,
            },
            bundle: {
                description: 'This is the Bundle instance that the data stream instance is connected.',
                type: 'SABundleInstance',
                cardinality: 1,
            },
            channels: {
                description: 'This is the collection of channel instances that are attached to this data stream',
                type: 'DataChannelInstance',
                cardinality: 'n',
                owner: true,
                composition: true,
                via: 'stream'
            },
            policies: {
                description: 'This is the list of policies that are controlling the channels of the stream. They can' +
                    ' come from the DataStream, the Resource, or the system overall.',
                type: 'DataChannelInstance',
                cardinality: 'n',
                owner: false,
            },
            transforms: {
                description: 'These are the transforms to run on the stream before it goes to the output streams.',
                type: 'DataTransformInstance',
                cardinality: 'n',
                owner: false
            }
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    deploy: {
                        Created: { }
                    }
                }
            },
            Created: {
                description: "DataStreamInstance is created",
                events: {
                    disable: {
                        Disabled: { }
                    },
                    destroy: {
                        Destroyed: {}
                    }
                },
            },
            Disabled: {
                description: "DataStreamInstance is disabled",
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
                description: "DataStreamInstance is Enabled",
                events: {
                    disbale: {
                        Disabled: { }
                    }
                }
            },
            Destroyed: {
                description: "DataStreamInstance is destroyed",
            },
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
                    retval += `<a-entity id="DataStreamInstance3D${i}">` +
                        `<a-cylinder height="30" radius="2" position="0 0 3" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 3 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 -3 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 0 -3" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = DataStreamInstance;

