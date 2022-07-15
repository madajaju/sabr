
class SABundleInstance {
    static definition = {
        name: 'SABundleInstance',
        description: 'Instance of a sentient agent bundle. This is were things are running. This includes the' +
            ' instances of services, channels, transformation services, etc...',
        unique: (obj) => { return obj.name; },
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the sentient agent bundle instance',
            },
            level: {
                type: 'string',
                description: 'Level of the SABR Instance. Determines the mode of operation.'
            }
        },
        associations: {
            parent: {
                description: 'Parent of the SAB Instance',
                type: 'SABundle',
                cardinality: 1,
            },
            inputs: {
                description: "Input Data Streams for the SABR",
                type: 'InputStreamInstance',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            outputs: {
                description: "Output Data Streams for the SABR",
                type: 'OutputStreamInstance',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            learningInput: {
                description: 'Learning Corpus Input Stream receives updates to the aimodel',
                type: 'InputStreamInstance',
                cardinality: 1,
            },
            learningOutput: {
                description: 'Learning Corpus Output Stream receives updates to the aimodel',
                type: 'OutputStreamInstance',
                cardinality: 1,
            },
            adminStream: {
                description: 'Administration Stream to handle registration of SABRS to Capabilities',
                type: 'InputStreamInstance',
                cardinality: 1,
            },
            admoutStream: {
                description: 'Administration Stream to handle registration of SABRS and Capabilities',
                type: 'OutputStreamInstance',
                cardinality: 1,
            },
            stack: {
                type: 'StackInstance',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            aimodels: {
                type: 'AIModel',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            transforms: {
                type: 'DataTransformInstance',
                cardinality: 'n',
                composition: false,
                owner: false
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
                    '': `color:#ffffaa; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="SABundleInstance3D${i}">` +
                        `<a-box height="10" width="10" depth="10" position="0 0 0" rotation="0 0 0" material="color:#ffcc88;" ></a-box>` +
                        `<a-cylinder height="15" radius="1" position="-10 2 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1" position="-10 -2 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.5" position="13 0 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                        `<a-cone height="15" radius-bottom="4" radius-top="0" position="10 0 0" rotation="0 0 -90" material="color:#ffcc88;" ></a-cone>` +
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
                description: "The SABR has been created and ready to be deployed.",
                events: {
                    deploy: {
                        Deploying: { }
                    },
                    deploying: {
                        Deploying: { }
                    }
                }
            },
            Deploying: {
                description: "The SABR is connecting to all of the streams including admin and learning streams.",
                events: {
                    deployed: {
                        Enabled: {}
                    },
                    running: {
                        Running: {}
                    }
                }
            },
            Running: {
                description: "The SABR is Running. This state is for server that deployed the SABR.",
                events: {
                    enable: {
                        Enabled: {},
                    },
                    disable: {
                        Disabled: {},
                    }
                }
            },
            Enabled: {
                description: "The SABR is running all transformation and streams are receiving and transmitting",
                events: {
                    disable: {
                        Disabled: {}
                    }
                }
            },
            Disabled: {
                description: "The SABR is disabled and is not receiving or transmitting data.",
                events: {
                    enable: {
                        Enabled: {}
                    }
                }
            }
        }
    }
}

module.exports = SABundleInstance;

