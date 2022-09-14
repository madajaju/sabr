
class ProcessProvisioner {
    static definition = {
        name: 'ProcessProvisioner',
        description: 'Provisions services as spawned processes. This is a specailization of the Provisioner abstract' +
            ' class. It focuses on running a service on the same machine as the provisioner using a spawned process.' ,
        extends: 'Provisioner',
        attributes: {
        },
        associations: {
        },
        view: {
            color: "#aaffaa",
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
                    '': `color:#aaffaa; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="ProcessProvisioner3D${i}">` +
                        `<a-sphere radius="8" position="0 0 0" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `<a-torus arc="360" radius="10" radius-tubular="1" position="0 0 0" rotation="0 0 0" material="${materials[i]};" ></a-torus>` +
                        `<a-cone height="8" radius-bottom="3" radius-top="0" position="12 0 0" rotation="0 0 -90" material="${materials[i]};" ></a-cone>` +
                        `<a-box height="4" width="4" depth="4" position="18 0 0" rotation="0 0 0" material="${materials[i]};" ></a-box>` +
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

module.exports = ProcessProvisioner;

