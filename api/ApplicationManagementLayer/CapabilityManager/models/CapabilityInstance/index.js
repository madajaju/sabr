


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

class CapabilityInstance {
    static definition = {
        name: 'CapabilityInstance',
        description: 'A CapabilityInstance contains the execution environment, logging, and state of a running' +
            ' capability in the ecosystem. This model provides an interface to manage and control the running' +
            ' instance.',
        attributes: {
            name: {
                type: 'string',
                description: 'Instance of the capability running in the system',
            }
        },
        associations: {
            bundles: {
                type: 'SABundleInstance',
                description: 'Bundle instances running on the ecosystem.',
                cardinality: 'n',
            },
            owner: {
                description: 'Owner of the instance is the capability.',
                type: 'Capability',
                cardinality: 1,
                composition: false,
                owner: false,
            },
         provisioner: {
                type: 'Provisioner',
                description: 'Provisioner of the Instance',
                cardinality: 1,
            },
        },
        view: {
            color: "#00aaff",
            object2d: (options) => {
                // Triangle
                let material = {color: "#00aaff", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#00aaff; transparent:true, opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true, opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true, opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true, opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="CapabilityInstance3D${i}">` +
                        `<a-box width="5" height="5" depth="5" position="10 0 0" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="15 0 0" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `<a-box width="5" height="5" depth="5" position="0 5 3" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="5 5 3" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `<a-box width="5" height="5" depth="5" position="0 -5 3" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="5 -5 3" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `<a-box width="5" height="5" depth="5" position="-5 0 -3" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="0 0 -3" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    create: {
                        Created: {}
                    },
                }
            },
            Created: {
                description: "Capability is created",
                events: {
                    deploy: {
                        Deploying: {}
                    },
                    destroy: {
                        Destroyed: {}
                    }
                },
            },
            Deploying: {
                description: "Capability is deploying",
                events: {
                    deployed: {
                        Deployed: {}
                    }
                }
            },
            Deployed: {
                description: "The Capability is Deployed.",
                events: {
                    disable: {
                        Disabled: {}
                    }
                }
            },
            Disabled: {
                description: "Stream is disabled",
                events: {
                    enable: {
                        Deployed: {}
                    },
                    destroy: {
                        Destroyed: {}
                    }
                }
            },
            Destroyed: {
                description: "Stream is destroyed",
            },
        },
    }
}

module.exports = CapabilityInstance;

