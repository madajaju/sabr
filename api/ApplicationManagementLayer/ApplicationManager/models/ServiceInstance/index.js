

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

class ServiceInstance {
    static definition = {
        name: 'ServiceInstance',
        description: 'This is an instance of a service running on resources. The Instance is allocated to ' +
            'resources based on the environment and policies of the Service and the Servicelet. A set of ' +
            'actions can be performed on the instance as defined by the runScripts association. ',
        attributes: {
            name: {
                description: 'Name of the service instance',
                type: 'string',
            },
            pid: {
                description: 'process id of the service instance',
                type: 'string',
            },
            url: {
                descrition: 'admin url for the service.',
                type: 'string'
            },
            stdout: {
                description: 'stdout of the instance running.',
                type: 'string',
            },
            stderr: {
                description: 'stderr of the instance running.',
                type: 'string',
            }
        },
        associations: {
            parent: {
                description: 'Service definition for the instance.',
                type: 'Service',
                cardinality: 1,
            },
            stack: {
                description: 'StackInstance that is running the service instance',
                type: 'StackInstance' ,
                cardinality: 1,
                composition: false ,
                owner: false ,
            },
        },
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
                description: "Service Instance Created.",
                events: {
                    launched: {
                        Deploying: { }
                    }
                }
            },
            Deploying: {
                description: "Service Instance is deploying.",
                events: {
                    deployed: {
                        Deployed: {}
                    }
                }
            },
            Deployed: {
                description: "Service Instance is deployed and can accept configuration details.",
                events: {
                    provision: {
                        Provisioning: {}
                    },
                }
            },
            Provisioning: {
                description: "Provisioning the instance with confrigurations",
                events: {
                    provisioned: {
                        Ready: { }
                    },
                    failed: {
                        Failed: { }
                    }
                }
            },
            Failed: {
                description: "Failed to provision",
            },
            Ready: {
                description: "Service instance is ready to use!",
                events: {
                    kill: {
                        Killed: { },
                    },
                }
            },
            Killed: {
                description: "Service Instance is killed"
            }
        },
        view: {
            color: "#aaffaa",
            object2d: (options) => {
                // Triangle
                let material = { color: "#aaffaa", border:"#000000"};
                if(options) {
                    material = options;
                }
                return `<circle cx="-8" cy="8" r="6" style="fill:#cccccc;stroke:#888888;stroke-width:1" />` +
                    `<polygon points="-10,10 10,10 5,-10 -5,-10 -10,10" style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;

            },
            object3d: (options) => {
                let materials = {
                    '': `color:#aaffaa; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for(let i in materials) {
                    retval += `<a-entity id="ServiceInstance3D${i}">` +
                        `<a-cone radius-bottom="10" radius-top="5" height="20" radialSegments="10" position="0 0 0" material="${materials[i]}" ></a-cone>` +
                        `<a-sphere radius="6" position="-6 -6 6" material="color:#ffffff; transparent:true; opacity:0.60"></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = ServiceInstance;

