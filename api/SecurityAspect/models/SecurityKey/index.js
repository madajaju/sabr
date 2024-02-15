


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

