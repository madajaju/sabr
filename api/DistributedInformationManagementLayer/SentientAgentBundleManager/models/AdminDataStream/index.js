class AdminDataStream {
    static definition = {
        name: 'AdminDataStream',
        description: 'A Data stream defines where I am getting data from or pushing data.',
        extends: 'DataStream',
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

module.exports = AdminDataStream;

