
class OutputStreamInstance {
    static definition = {
        name: 'OutputStreamInstance',
        description: 'This is a specialization of the DataStreamInstance for producing output.',
        extends: 'DataStreamInstance',
        attributes: {
            producer: {
                type: 'ref',
                description: 'This is the producer send output.'
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
                    }
                }
            },
            Created: {
                description: "Stream Instance created but not connected.",
                events: {
                    deploy: {
                        Deploying: { }
                    },
                }
            },
            Deploying: {
                description: "Stream Instance is connecting to the message queues",
                events: {
                    deployed: {
                        Enabled: {}
                    }
                }
            },
            Enabled: {
                description: "Stream Instance is ready to send information to the message queues.",
                events: {
                    disable: {
                        Disabled: {},
                    },
                    send: {
                        Enabled: {},
                    }
                }
            },
            Disabled: {
                description: "Stream Instance cannot send information at this time and no transformations are working.",
                events: {
                    enable: {
                        Enabled: {},
                    }
                }
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
                    retval += `<a-entity id="OutputStreamInstance3D${i}">` +
                        `<a-cone height="15" radius-bottom="0" radius-top="8" position="20 0 0" rotation="0 0 90" material="${materials[i]}" ></a-cone>` +
                        `<a-cylinder height="30" radius="2" position="0 0 3" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 3 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 -3 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 0 -3" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = OutputStreamInstance;

