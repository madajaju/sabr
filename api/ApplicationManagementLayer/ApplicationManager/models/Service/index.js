
/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

class Service {
    static definition = {
        name: 'Service',
        description: 'A Service is an orchestrate element that represents a container or vm running on a ' +
            'resource. The actual execution of the service is tracked by the ServiceInstance. A stack is made up ' +
            'of multiple services.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the Service',
            },
            command: {
                type: 'string',
                description: 'The command to run on the commandline.'
            },
            version: {
                type: 'string',
                description: 'Version of the Service',
            },
            ports: {
                type: 'json',
                description: 'List of ports internally'
            },
            expose: {
                type: 'json',
                description: 'List of ports to expose'
            },
            parameters: {
                type: 'json',
                description: '[ {name: value} ] - Lsit of parameters for the service'
            },
            environment: {
                type: 'json',
                description: '{name:value, name2:value}'
            },
            provisionScript: {
                type: 'ref',
                description: 'provision script to run on the deployed service.',
            }
        },
        associations: {
            stack: {
                description: 'Parent Stack of the service',
                type: 'Stack',
                cardinality: 1,
                composition: false,
                owner: false,
            },
            children: {
                description: 'Child services of the service',
                type: 'Service',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            parent: {
                description: 'Parent of the service',
                type: 'Service',
                cardinality: 1,
                composition: false,
                owner: false,
            },
            instances: {
                description: 'Instances of the services.',
                type: 'ServiceInstance',
                cardinality: 'n',
                owner: true,
                via: 'parent',
            }
        },
        /*
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    create: {
                        Created: { }
                    }
                }
            },
            Created: {
                description: "My Description of the state",
                events: {
                    eventName: {
                        StateName: {
                            condition: function(obj) { ... },
                            action: function(obj) { ... },
                        }
                    },
                    eventName2 ...
                }
                actions: {
                    entry: { entry1: function(obj) { ... } },
                    exit: { exit1: function(obj): { ... } }
                }
            }
        }
        */
        view: {
            color: "#aaffaa",
            object2d: (options) => {
                // Triangle
                let material = { color: "#aaffaa", border:"#000000"};
                if(options) {
                    material = options;
                }
                return `<polygon points="-10,10 10,10 5,-10 -5,-10 -10,10" style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {
                let materials = {
                    '': `color:#aaffaa; transparent:true, opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true, opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true, opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true, opacity:0.90;`
                };
                let retval = "";
                for(let i in materials) {
                    retval += `<a-entity id="Service3D${i}">` +
                        `<a-cone radius-bottom="10" radius-top="5" height="20" radialSegments="10" position="0 0 0" material="${materials[i]}" ></a-cone>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = Service;

