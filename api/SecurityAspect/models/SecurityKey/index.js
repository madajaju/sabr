
/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

class SecurityKey {
    static definition = {
        name: 'SecurityKey',
        description: 'Security Key',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the security key',
            },
            value: {
                type: 'string',
                description: 'Value of the security key.'
            },
            iv: {
                type: 'string',
                description: 'IV of the Security Key.',
            }
        },
        associations: {
        },
        view: {
            color: "#ffaaaa",
            object2d: (options) => {
                // rectangle
                let material = {color: "#ffaaaa", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#ffaaaa; transparent:true; opacity:1.00;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:1.00;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:1.00;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:1.00;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="SecurityKey3D${i}">` +
                        `<a-box height="10" width="10" depth="2" position="-5 0 0" material="${materials[i]}" ></a-box>` +
                        `<a-box height="3" width="20" depth="1.5" position="10 0 0" material="${materials[i]}" ></a-box>` +
                        `<a-box height="3" width="1" depth="1.5" position="18 -2 0" material="${materials[i]}" ></a-box>` +
                        `<a-box height="2" width="1" depth="1.5" position="16 -2 0" material="${materials[i]}" ></a-box>` +
                        `<a-box height="3" width="1" depth="1.5" position="14 -2 0" material="${materials[i]}" ></a-box>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
        /*
        statenet: {
            Init: {
                description: "Initial State"
                events: {
                    create: {
                        StateName: { }
                    }
                }
            },
            StateName: {
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
    }
}

module.exports = SecurityKey;

