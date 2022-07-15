
class Capability {
    static definition = {
        name: 'Capability',
        description: 'Capabilities are deployed across multiple assets in the ecosystem. They consist of connecting' +
            ' multiple SABRs together to show a flow of data through the system. The Capability contains policies' +
            ' that define how the SABR bundles should react to different events in the system. Instances of the' +
            ' Capabilities are managed from the capability manager and consist of all of the information about the' +
            ' running capability.',
        unique: (obj) => { return obj.name; },
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the capability to deploy to the network',
            }
        },
        associations: {
            policies: {
                description: 'Policies to apply to the bundles when they are deployed.',
                type: 'StreamPolicy',
                cardinality: 'n',
            },
            bundles: {
                description: 'SABR Bundles that make up the Capabilities.',
                type: 'SABundle',
                cardinality: 'n',
                composition: false,
                owner: false,
            },
            instances: {
                description: 'This is a instance of capability running in the ecosystem.',
                type: 'CapabilityInstance',
                cardinality: 'n',
                composition: true,
                owner: true,
                via: 'owner'
            }
        },
        view: {
            color: "#00aaff",
            object2d: (options) => {
                // Triangle
                let material = {color: "#00aaff", border: "#000000"};
                if (options) {
                    material = options;
                }
                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#00aaff; transparent:true, opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true, opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true, opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true, opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="Capability3D${i}">` +
                        `<a-box width="5" height="5" depth="5" position="10 0 0" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="15 0 0" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `<a-box width="5" height="5" depth="5" position="0 5 3" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="5 5 3" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `<a-box width="5" height="5" depth="5" position="0 -5 3" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="5 -5 3" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `<a-box width="5" height="5" depth="5" position="-5 0 -3" material="${materials[i]}" ></a-box>` +
                        `<a-cone height="5" radius-bottom="2.5" radius-top="1" position="0 0 -3" rotation="0 0 -90" material="${materials[i]}" ></a-cone>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = Capability;

