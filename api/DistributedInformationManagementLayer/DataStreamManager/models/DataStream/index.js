class DataStream {
    static definition = {
        name: 'DataStream',
        description: 'A Data stream defines where I am getting data from or pushing data.',
        unique: (obj) => {
            return obj.name;
        },
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the Data Stream',
            },
        },
        associations: {
            policies: {
                description: 'This is the collection policies that apply to the stream when the stream is created.',
                type: 'StreamPolicy',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            channels: {
                description: 'This is the collection of channel that are attached to this data stream',
                type: 'DataChannel',
                cardinality: 'n',
                owner: true,
                composition: true,
                via: 'stream'
            },
            instances: {
                description: 'This is the collection of deployed data streams in the system of this specific data' +
                    ' stream.',
                type: 'DataStreamInstance',
                cardinality: 'n',
                composition: false,
                owner: true,
                via: 'parent'
            },
            transforms: {
                description: 'This is the transformation that is called on data arriving to the Data Stream.',
                type: 'DataTransform',
                cardinality: 'n',
            },
            consumers: {
                description: 'This is a consumer of the data stream.',
                type: 'SABundle',
                cardinality: 'n',
            },
            producers: {
                description: 'This is a producer of the data stream.',
                type: 'SABundle',
                cardinality: 'n',
            },
            encryptionKey: {
                description: 'This is the encryption key for the data stream',
                type: 'SecurityKey',
                cardinality: 1,
            },
            decryptionKey: {
                description: 'This is the decryption key for the data stream',
                type: 'SecurityKey',
                cardinality: 1,
            }
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    build: {
                        Building: {}
                    }
                }
            },
            Building: {
                description: "Building the Data Stream",
                events: {
                    built: {
                        Created: {
                            condition: {
                                description: "No build error",
                                fn: (obj) => {
                                    return !obj.error;
                                }
                            }
                        },
                        Failed: {
                            condition: {
                                description: "Build error",
                                fn: (obj) => {
                                    return obj.error;
                                }
                            }
                        }
                    }
                },
                actions: {
                    entry: [
                        {
                            description: "Return Good",
                            fn: (obj) => {
                                return "Good";
                            }
                        },
                        {
                            description: "List all of the datastreams",
                            action: 'datastream/list'
                        }
                    ],
                    exit: [
                        {
                            description: "List the data",
                            action: 'data/list',
                        },
                        {
                            description: "Change the version number",
                            action: 'data/get'
                        }
                    ]
                }
            },
            Created: {
                description: "DataStream is created",
                events: {
                    deploy: {
                        Enabled: {}
                    }
                },
            },
            Disabled: {
                description: "DataStream is disabled",
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
                description: "DataStream is Enabled",
                events: {
                    disable: {
                        Disabled: {}
                    }
                }
            },
            Failed: {
                description: "Failed to build",
            },
            Destroyed: {
                description: "DataStream is destroyed",
            },
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
                    retval += `<a-entity id="DataStream3D${i}">` +
                        `<a-cylinder height="30" radius="2" position="0 0 3" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 3 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 -3 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="30" radius="2" position="0 0 -3" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = DataStream;

