class DataTransformInstance {
    static definition = {
        name: 'DataTransformInstance',
        description: 'This represents an instance of a data transformation running in the system.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the transformation',
            },
            version: {
                type: 'string',
                description: 'Version of the transformation',
            },
            fn: {
                type: 'json',
                description: 'Function to run. This should have two parameters. (data,channel)'
            }
        },
        associations: {
            inputs: {
                description: 'Inputs of the transformation.',
                type: 'InputStreamInstance',
                cardinality: 'n',
            },
            outputs: {
                description: 'Outputs of the transformation.',
                type: 'OutputStreamInstance',
                cardinality: 'n',
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
                    retval += `<a-entity id="DataTransformInstance3D${i}">` +
                        `<a-cone height="30" radius-bottom="10" radius-top="5" position="0 0 0" rotation="0 0 -90" material="${materials[i]};" ></a-cone>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        },
    }
}

module.exports = DataTransformInstance;

