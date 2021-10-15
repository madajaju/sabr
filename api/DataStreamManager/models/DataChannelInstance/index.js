class DataChannelInstance {
    static definition = {
        name: 'DataChannelInstance',
        description: 'Data Channel Instance represents the connection of the services to the channel at the edge',
        uniq: (obj) => { return obj.name; },
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the data channel instance',
            },
            direction: {
                type: 'string',
                descrition: 'In or Out',
            },
            message: {
                type: 'string',
                description: 'Message string from the failed state.'
            }
        },
        associations: {
            design: {
                description: 'Parent of the channel Instance. This is the definition of the channel.',
                type: 'DataChannel',
                cardinality: 1,
            },
            stream: {
                description: 'This is the stream instance that is running the channel',
                type: 'DataStreamInstance',
                cardinality: 1,
            },
            transformInstance: {
                description: 'This is the instance of the transformation Service for the channel.',
                type: 'ServiceInstance',
                cardinality: 'n'
            }
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    create: {
                        Created: {}
                    }
                }
            },
            Created: {
                description: "Stream is created",
                events: {
                    disable: {
                        Disabled: {}
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
                        Disabled: {}
                    }
                }
            },
            Destroyed: {
                description: "Stream is destroyed",
            },
        },
        view: {
            color: "#bb77ff",
            object2d: (options) => {
                // rectangle
                let material = {color: "#bb77ff", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#bb77ff; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="DataChannelInstance3D${i}">` +
                        `<a-cylinder height="30" radius="4" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = DataChannelInstance;

