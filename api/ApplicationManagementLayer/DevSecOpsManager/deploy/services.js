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
            image: 'devops',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/devops": { path: '/', port: 3000, protocol:"http"},
                "/devops/socket.io": { path: '/socket.io', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: {
            },
        },
        build: {
            image: 'jenkins/jenkins:alpine',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" },
                jenkins_home: { source: "/var/jenkins_home", target: "/var/jenkins_home" }
            },
            interface: {
                "/build": {path: '/', port: 8080, protocol:"http"},
                "/build/admin": {path: '/', port:50000, protocol:"http"}
            }
        }
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
