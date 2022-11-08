
class OutputChannelInstance {
    static definition = {
        name: 'OutputChannelInstance',
        description: 'This is the producer to the data stream. Data is flowing out of the transformation.',
        extends: 'DataChannelInstance',
        attributes: {
            producer: {
                type: 'ref',
                description: 'This is the reference to the producer. This can be implemented with pulsar or kafka.',
            },
            queue: {
                type: 'ref',
                description: 'This contains an array of inputs that are backed up due to channel closure.',
            },
            producerName: {
                type: 'string',
                description: 'This is the name of the pulsar producer',
            }
        },
        associations: {
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    create: {
                        Created: { }
                    },
                }
            },
            Created: {
                description: 'The Channel is created but not connected to message queues',
                events: {
                    deploy: {
                        Deploying: {},
                    }
                }
            },
            Deploying: {
                description: 'The channel is currently being deployed and connected to the message queues',
                events: {
                    deployed: {
                        Enabled: {},
                    },
                    failed: {
                        Failed: {},
                    }
                }
            },
            Enabled: {
                description: 'Channel can send information.',
                events: {
                    disable: {
                        Disabled: {}
                    },
                }
            },
            Disabled: {
                description: 'Channel cannot send information.',
                events: {
                    enable: {
                        Enabled: {}
                    }
                }
            },
            Failed: {
                description: "Channel failed to deploy."
            }

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
                    retval += `<a-entity id="OutputChannelInstance3D${i}">` +
                        `<a-cone height="15" radius-bottom="0" radius-top="8" position="15 0 0" rotation="0 0 90" material="${materials[i]}" ></a-cone>` +
                        `<a-cylinder height="30" radius="4" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = OutputChannelInstance;

