

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

module.exports = {
    services: {
        sabr: {
            image: "sabr_diml_sabm_sabr",
            interface: {
                web: {path:'/sabr', port: 3000 },
            },
            networks: {
                children: {},
                siblings: {}
            },
            environment: {
                PULSAR_ADMIN:"tasks.pulsar:8080",
                PULSAR_HOST:"tasks.pulsar:6650",
                SABR_STREAM:"./streams.js",
                SABR_NAME:"sabr1",
            }
        },
        web: {
            image: "sabr_diml_sabm_web",
            interface: {
                web: {path:'/web', port: 3000 },
            },
            networks: {
                children: {},
                siblings: {}
            }
        },
        pulsar: {
            type: "stack",
            image: "sabr_diml_dsm_pulsar",
            interface: {
                pulsar: {path:"/pulsar", port:3000}
            },
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            environment: {
                SABR_PULSAR_NETWORK: "pulsar_net",
            },
            networks: {
                pulsar_net: {},
                children: {},
                parent: {},
            }
        },
    },
    policies: {

    },
    interface: {
        ports: {
            80: 3000,
            443: 3000,
            8081: 8081
        }
    },
    data: {

    },
    networks: {
        pulsar_net: {
            driver: "overlay",
            attachable: true,
            name: "pulsar_net"
        }
    }
}
