
class DataChannel {
    static definition = {
        name: 'DataChannel',
        description: 'This represents one channel in the data stream with specific rules for the channel.',
        attributes: {
            name: {
                type: 'string',
                description: 'Data Channel Name',
            },
            direction: {
                type: 'string',
                description: 'In or Out',
            }
        },
        associations: {
            transformService: {
                description: "This is the transformation service for the channel. It will summarize the data, give" +
                    " historical data, give all of the data as a passthru, or any other data transformation needed" +
                    " for the individual channel based on the policy applied to the data stream",
                type: 'Service',
                cardinality: 1
            },
            policy: {
                description: 'This policy is the policy that will create an instance of the data channel attached to' +
                    ' a data stream. The policy defines how the channel is created and what transformation service' +
                    ' to use when publishing or consuming information on the channel.',
                type: 'StreamPolicy',
                cardinality: 'n',
            },
            instances: {
                description: 'This is a collection of all of the instances of the data channel running in the system.',
                type: 'DataChannelInstance',
                cardinality: 'n',
            },
            stream: {
                description: 'This is the owning stream',
                type: 'DataStream',
                cardinality: 1,
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
                description: "DataChannel is created",
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
                description: "DataChannel is disabled",
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
                description: "DataChannel is Enabled",
                events: {
                    disbale: {
                        Disabled: { }
                    }
                }
            },
            Destroyed: {
                description: "DataChannel is destroyed",
            },
        },
        view: {
            color: "#00ffff",
            object2d: (options) => {
                // rectangle
                let material = {color: "#00ffff", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#00ffff; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="DataChannel3D${i}">` +
                        `<a-cylinder height="30" radius="4" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = DataChannel;

