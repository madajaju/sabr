


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

class ChannelCreationPolicy {
    static definition = {
        name: 'ChannelCreationPolicy',
        description: 'The Stream Policy takes the Data Stream and creates Data Channels based on the policies',
        unique: (obj) => { return obj.name; },
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the policy',
            },
        },
        associations: {
            post: {
                description: "This is the transform to run after all of the transformation and before sending out.",
                type: 'DataTransform',
                cardinality: 1,
            },
            pre: {
                description: "This is the transform to run after all of the transformation and before sending out.",
                type: 'DataTransform',
                cardinality: 1,
            },
            stream: {
                description: 'This is the collection of streams that the policy is attached. The policy will only' +
                    ' apply to the attached DataStreams.',
                type: 'DataStream',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            channels: {
                description: 'This collection of channels that are used to create channel instances when the stream' +
                    ' is created.',
                type: 'DataChannel',
                cardinality: 'n',
                composition: false,
                owner: false
            }
        },
        view: {
            color: "#aa77ff",
            object2d: (options) => {
                // Triangle
                let material = { color: "#aa77ff", border:"#000000"};
                if(options) {
                    material = options;
                }
                return `<circle cx="0" cy="0" r="4" length="3.14" style="fill:${material.color};stroke:${material.border};stroke-width:1" />` +
                    `<circle cx="0" cy="0" r="2" style="fill:white;stroke:${material.border};stroke-width:1" />` +
                    `<rect width="10" height="8" x="-5" y="0" style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
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
                        Created: { }
                    }
                }
            },
            Created: {
                description: "ChannelCreationPolicy is created",
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
                description: "ChannelCreationPolicy is disabled",
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
                description: "ChannelCreationPolicy is Enabled",
                events: {
                    disbale: {
                        Disabled: { }
                    }
                }
            },
            Destroyed: {
                description: "ChannelCreationPolicy is destroyed",
            },
        }
    }
}

module.exports = ChannelCreationPolicy;

