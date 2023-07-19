/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

module.exports = {
    services: {
        web: {
            image: "sabr_web",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/web": { path: '/web', port: 3000, protocol:"http"},
                "/web/socket.io": { path: '/web/socket.io', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: {
                "PULSAR_HOST": "pulsar:6650",
            },
        },
        pulsar: {
            image: 'sabr_pulsar:standalone',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/pulsar/": { path: '/', port: 6650, protocol:"http"},
                "/_padmin/": { path: '/', port: 8080, protocol:"http"},
            },
            policies: { },
            environment: { },
        },
        doc: {
            image: 'sabr_doc',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/docs": { path: '/docs', port: 4000, protocol:"http"},
            },
            policies: { },
            environment: { },
        },
    },
    policies: {

    },
    interface: {
        ports: {
            80: 3000,
            443: 3000,
            6650: 6650,
            8080: 8080,
        }
    },
    data: {

    },
    networks: {

    }
}
