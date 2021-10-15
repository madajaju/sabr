
class KeyStore {
    static definition = {
        name: 'KeyStore',
        description: 'KeyStore contains security and other secret keys',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the Key Store',
            }
        },
        associations: {
            keys: {
                type: 'SecurityKey',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
        },
        view: {
            color: "#ffaaaa",
            object2d: (options) => {
                // rectangle
                let material = {color: "#ffaaaa", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#ffaaaa; transparent:true; opacity:0.70;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.70;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.70;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.70;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="KeyStore3D${i}">` +
                        `<a-dodecahedron radius="10" segments-height="8" segments-width="8" material="${materials[i]}" ></a-dodecahedron>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
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

module.exports = KeyStore;

