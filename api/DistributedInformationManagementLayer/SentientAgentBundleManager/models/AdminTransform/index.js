
class AdminTransform {
    static definition = {
        name: 'AdminTransform',
        description: 'Data Transformation taking inputs and producing to outputs.',
        extends: 'DataTransform',
        attributes: {
        },
        associations: {
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
                    retval += `<a-entity id="DataTransform3D${i}">` +
                            `<a-cone height="30" radius-bottom="10" radius-top="5" position="0 0 0" rotation="0 0 -90" material="${materials[i]};" ></a-cone>` +
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

module.exports = AdminTransform;
