


/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

class DockerProvisioner {
    static definition = {
        name: 'DockerProvisioner',
        description: 'The DockerProvisioner uses Docker to provision services in the system. This is a' +
            ' specialization in the system so different provisioners can be used. In this case the docker swarm' +
            ' engine is used to provision services.',
        extends: 'Provisioner',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the docker provisioner',
            }
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
                    retval += `<a-entity id="DockerProvisioner3D${i}">` +
                        `<a-sphere radius="8" position="0 0 0" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `<a-torus arc="360" radius="10" radius-tubular="1" position="0 0 0" rotation="0 0 0" material="${materials[i]};" ></a-torus>` +
                        `<a-cone height="8" radius-bottom="3" radius-top="0" position="12 0 0" rotation="0 0 -90" material="${materials[i]};" ></a-cone>` +
                        `<a-sphere radius="2.5" position="18 0 0" material="${materials[i]}" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        },
    }
}

module.exports = DockerProvisioner;

