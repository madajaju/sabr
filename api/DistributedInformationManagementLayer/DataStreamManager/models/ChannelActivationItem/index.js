class ChannelActivationItem {
    static definition = {
        name: 'ChannelActivationItem',
        description: 'This is an channel activation item used in the ChannelActivationPolicy',
        attributes: {
            name: {
                type: 'string',
                description: 'name of the channel activation item',
            },
            priority: {
                type: 'number',
                description: 'prioritization number',
            },
            activated: {
                type: 'boolean',
                description: 'channel is activated'
            }
        },
        associations: {
            channel: {
                type: 'DataChannel',
                cardinality: 1,
                composition: false,
                owner: false,
            },
            parent: {
                type: 'ChannelActivationPolicy',
                cardinality: 1
            }
        },
        view: {
            color: "#aa77ff",
            object2d: (options) => {
                return ``;
            },
            object3d: (options) => {
                let materials = {
                    '': `color:#aa77ff; transparent:true, opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true, opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true, opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true, opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="ChannelCreationPolicy3D${i}">` +
                        `<a-torus radius="5" radius-tubular="0.6" rotation="0 90 0" material="${materials[i]}" ></a-torus>` +
                        `<a-cylinder height="15" radius="4" position="-7.5 0 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 0 2" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 0 -2" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 -2 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `<a-cylinder height="15" radius="1.25" position="7.5 2 0" rotation="0 0 90" material="${materials[i]}" ></a-cylinder>` +
                        `</a-entity>`;
                }
                return retval;
            }
        },
    }
}

module.exports = ChannelActivationItem;

