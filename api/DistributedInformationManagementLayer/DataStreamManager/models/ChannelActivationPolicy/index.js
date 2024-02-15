


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

class ChannelActivationPolicy {
    static definition = {
        name: 'ChannelActivationPolicy',
        description: 'This policy is applied in the SABR to turn on and off channels based on a set of criteria. It' +
            ' also priortizes the Channels based on the set of criteria as well.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the policy',
            }
        },
        associations: {
            channels: {
                type: 'ChannelActivationItem',
                cardinality: 'n',
                composition: true,
                owner: true,
            },
        },
        view: {
            color: "#aa77ff",
            object2d: (options) => {
                return ``;
            },
            object3d: (options) => {
                let materials = {
                    '': `color:#aa77ff; transparent:true, opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true, opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true, opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true, opacity:0.90;`
                };
                let retval = "";
                for(let i in materials) {
                    retval += `<a-entity id="ChannelCreationPolicy3D${i}">` +
                        `<a-torus radius="5" radius-tubular="0.6" rotation="0 90 0" material="${materials[i]}" ></a-torus>` +
                        `<a-cylinder height="15" radius="4" position="-7.5 0 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 0 2" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 0 -2" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 -2 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 2 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
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
                        Enabled: { }
                    }
                }
            },
            Enabled: {
                description: "The state is enabled and ready to be activated based on the triggering criteria and" +
                    " events.",
                events: {
                    activate: {
                        "Active": {}
                    },
                    disable: {
                        "Disable": {}
                    }
                }
            },
            Disable: {
                description: "The state is disabled and will not trigger",
                events: {
                    enable: {
                        "Enabled": {}
                    }
                }
            },
            Active: {
                description: "The policy is currently actively being enforced. Which means that the trigger event" +
                    " occured and the criteria have been met.",
                events: {
                    deactivate: {
                        "Enabled": {}
                    },
                }
            }
        }
    }
}

module.exports = ChannelActivationPolicy;

