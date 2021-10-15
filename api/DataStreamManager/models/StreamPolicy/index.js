
class StreamPolicy {
    static definition = {
        name: 'StreamPolicy',
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
                    retval += `<a-entity id="StreamPolicy3D${i}">` +
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
                description: "Stream is created",
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
                description: "Stream is disabled",
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
                description: "Stream is Enabled",
                events: {
                    disbale: {
                        Disabled: { }
                    }
                }
            },
            Destroyed: {
                description: "Stream is destroyed",
            },
        }
    }
}

module.exports = StreamPolicy;

