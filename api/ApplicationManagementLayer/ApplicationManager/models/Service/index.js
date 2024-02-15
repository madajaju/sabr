


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

