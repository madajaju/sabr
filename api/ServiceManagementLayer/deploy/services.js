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
        sabr_sml_web: {
            type: "service",
            image: "sabr_sml_web",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/sml": { path: '/sml', port: 3000, protocol:"http"},
                "/sml/socket.io": { path: '/sml/socket.io', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: { },
        },
        sabr_sml_so: {
            type: "stack",
            image: "sabr_sml_so",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/so": { path: '/so', port: 3000, protocol:"http"},
                "/so/socket.io": { path: '/so/socket.io', port: 3000, protocol:"http"},
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
        }
    },
    data: {

    },
    networks: {

    }
}
