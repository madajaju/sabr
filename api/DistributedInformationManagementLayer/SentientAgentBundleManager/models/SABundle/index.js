
class SABundle {
    static definition = {
        name: 'SABundle',
        description: 'Sentient Agent Bundle consists of the definition of the services, data streams, and' +
            ' configurations to transform data at the edge and publish the results to upstream SABRs',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the Sentient Agent Bundle',
            },
            version: {
                type: 'string',
                description: 'Version of the SABundle',
            }
        },
        associations: {
            inputs: {
                description: "Input Data Streams for the SABR",
                type: 'DataStream',
                unique: true,
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            outputs: {
                description: "Output Data Streams for the SABR",
                type: 'DataStream',
                unique: true,
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            learningInput: {
                description: 'Learning Corpus Input Stream receives updates to the aimodel',
                type: 'DataStream',
                cardinality: 1,
            },
            learningOutput: {
                description: 'Learning Corpus Output Stream receives updates to the aimodel',
                type: 'DataStream',
                cardinality: 1,
            },
            adminStream: {
                description: 'Administration Stream to handle registration of SABRS to Capabilities',
                type: 'DataStream',
                cardinality: 1,
            },
            admoutStream: {
                description: 'Administration Stream to handle registration of SABRS and Capabilities',
                type: 'DataStream',
                cardinality: 1,
            },
            transforms: {
                description: 'Data Transformations run on input data send to output data.',
                type: 'DataTransform',
                unique: true,
                cardinality: 'n',
            },
            applications: {
                type: 'Application',
                cardinality: 'n',
                compsosition: false,
                unique: true
            },
            stacks: {
                type: 'Stack',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            aimodels: {
                type: 'AIModel',
                cardinality: 'n',
                composition: false,
                unique: true,
                owner: false,
            },
            instances: {
                type: 'SABundleInstance',
                cardinality: 'n',
                composition: false,
                owner: true,
                via: 'parent',
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
                    retval += `<a-entity id="SABundle3D${i}">` +
                            `<a-box height="10" width="10" depth="10" position="0 0 0" rotation="0 0 0" material="color:#ffcc88;" ></a-box>` +
                            `<a-cylinder height="15" radius="1" position="-10 2 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                            `<a-cylinder height="15" radius="1" position="-10 -2 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                            `<a-cylinder height="15" radius="1.5" position="13 0 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                            `<a-cone height="15" radius-bottom="4" radius-top="0" position="10 0 0" rotation="0 0 -90" material="color:#ffcc88;" ></a-cone>` +
                            `<a-box height="5" width="25" depth="15" position="-5 -7 0" rotation="0 0 0" material="${materials[i]}" ></a-box>` +
                            `<a-dodecahedron radius="4" position="15 -7 0" material="color:#ffaaaa;" ></a-dodecahedron>` +
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

module.exports = SABundle;

