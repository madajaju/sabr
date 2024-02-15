


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

class ApplicationInstance {
    static definition = {
        name: 'ApplicationInstance',
        description: 'An Application Instance represents an application that is running in the ecosystem',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the application instance'
            },
            status: {
                type: 'string',
                description: 'Name of the application instance'
            },
            message: {
                type: 'string',
                description: 'Last message in the application instance'
            }
        },
        associations: {
            app: {
                type: 'Application',
                cardinality: 1,
                composition: false,
                owner: false,
            },
        },
        statenet: {
            Init: {
                description: 'Initial State of the Application Instance',
                events: {
                    create: {
                        Initializing: {}
                    }
                }
            },
            Initializing: {
                description: 'When a ApplicationInstance is being initialized in the ecosystem.',
                events: {
                    provisoned: {
                        Running: {}
                    }
                }
            },
            Running: {
                description: 'The ApplicationInstance is running in the ecosystem.',
                events: {
                    kill: {
                        Stopping: {}
                    }
                }
            },
            Stopping: {
                description: 'The ApplicationInstance is stopping but not stopped yet.',
                events: {
                    stopped: {
                        Stopped: {}
                    }
                }
            },
            Stopped: {
                description: 'The ApplicationInstance has been stopped.',
                events: {
                    exit: {
                        Exit: {}
                    },
                    failed: {
                        Failed: {}
                    }
                }
            },
            Exit: {
                description: 'The ApplicationInstance has exited.'
            },
            Failed: {
                description: 'The ApplicationInstance failed during initailization or after it was running.'
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

                return `<rect width="10" height="10"style="fill:${material.color};stroke:${material.border};stroke-width:1" />` +
                `<circle cx="0" cy="0" r=4 style="fill:#dddddd;stroke:#888888;stroke-width:1" />`;
            },
            object3d: (options) => {

                let materials = {
                    '': `color:#00aaff; transparent:true; opacity:0.90;`,
                    'Selected': `color:#ffff00; transparent:true; opacity:0.90;`,
                    'Targeted': `color:#00ff00; transparent:true; opacity:0.90;`,
                    'Sourced': `color:#ff0000; transparent:true; opacity:0.90;`
                };
                let retval = "";
                for (let i in materials) {
                    retval += `<a-entity id="ApplicationInstance3D${i}">` +
                        `<a-box width="20" height="20" depth="20" material="${materials[i]}" ></a-box>` +
                        `<a-sphere radius="8" position="0 0 8" material="color:white; transparent:true;opacity:0.60" ></a-sphere>` +
                        `</a-entity>`;
                }
                return retval;
            }
        }
    }
}

module.exports = ApplicationInstance;

