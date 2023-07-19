
/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

class Provisioner {
    static definition = {
        name: 'Provisioner',
        description: 'Abstract Provisioner Class used to develop an interface for the different provisioners.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the provisioner',
            },
            config: {
                type: 'json',
                description: 'Configuration for the provisioner.'
            }
        },
        associations: {
            services: {
                type: 'ServiceInstance',
                cardinality: 'n',
                composition: false,
                owner: false,
            },

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
                    retval += `<a-entity id="Provisioner3D${i}">` +
                        `<a-sphere radius="8" position="0 0 0" material="${materials[i]}" ></a-sphere>` +
                        `<a-torus arc="360" radius="10" radius-tubular="1" position="0 0 0" rotation="0 0 0" material="${materials[i]};" ></a-torus>` +
                        `<a-cone height="8" radius-bottom="3" radius-top="0" position="12 0 0" rotation="0 0 -90" material="${materials[i]};" ></a-cone>` +
                        `</a-entity>`;
                }
                return retval;
            }
        },

    }

}

module.exports = Provisioner;

