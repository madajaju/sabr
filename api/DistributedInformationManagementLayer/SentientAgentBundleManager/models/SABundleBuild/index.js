class SABundleBuild {
    static definition = {
        name: 'SABundleBuild',
        description: 'This is a build of a SABundle.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the SABundle Build',
            },
            version: {
                type: 'string',
                description: "Version of the SABundle Build",
            },
            encryptedData: {
                type: 'string',
                description: "Encrypted Data for the Bundle."
            }
        },
        associations: {
            encryptKey: {
                type: 'SecurityKey',
                cardinality: 1,
                composition: true,
                owner: true,
            },
            decryptKey: {
                type: 'SecurityKey',
                cardinality: 1,
                composition: true,
                owner: true,
            },
            iv: {
                description: 'Init Vector of the cipher',
                type: 'SecurityKey',
                cardinality: 1,
                composition: true,
                owner: true,
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
                    '': `color:#ffaaaa; transparent:true; opacity:0.80;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.80;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.80;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.80;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="SABundleBuild3D${i}">` +
                        `<a-box height="10" width="10" depth="10" position="0 0 0" rotation="0 0 0" material="color:#ffcc88;" ></a-box>` +
                        `<a-cylinder height="15" radius="1" position="-10 2 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1" position="-10 -2 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.5" position="13 0 0" rotation="0 0 90" material="color:#ffcc88;" ></a-cylinder>` +
                        `<a-cone height="15" radius-bottom="4" radius-top="0" position="10 0 0" rotation="0 0 -90" material="color:#ffcc88;" ></a-cone>` +
                        `<a-box height="5" width="25" depth="15" position="-5 -7 0" rotation="0 0 0" material="color:#ffcc88" ></a-box>` +
                        `<a-dodecahedron radius="4" position="15 -7 0" material="color:#ffaaaa;" ></a-dodecahedron>` +
                        `<a-box depth="16" height="20" width="20" material="${materials[i]}" ></a-box>` +
                        `<a-torus arc="180" radius="6" radius-tubular="1" material="${materials[i]}" position="0 10 0" ></a-torus>` +
                        `</a-entity>`;
                }
                return retval;
            }
        },
        /*
        statenet: {
            Init: {
                description: "Initial State"
                events: {
                    create: {
                        StateName: { }
                    }
                }
            },
            StateName: {
                description: "My Description of the state",
                events: {
                    eventName: {
                        StateName: {
                            condition: function(obj) { ... },
                            action: function(obj) { ... },
                        }
                    },
                    eventName2 ...
                }
                actions: {
                    entry: { entry1: function(obj) { ... } },
                    exit: { exit1: function(obj): { ... } }
                }
            }
        }
        */
    }
}

module.exports = SABundleBuild;

