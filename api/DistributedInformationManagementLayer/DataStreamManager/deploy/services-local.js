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
        pulsar: {
            image: "sabr_diml_dsm:standalone",
            interface: {
                pulsar: {path:'/pulsar', port: 6650 },
                pulsaradmin: {path:'/pulsar-admin', port: 8081 },
            },
            networks: {
            }
        },
    },
    policies: {
    },
    interface: {
        ports: {
            6650: 6650,
            8081: 8080,
        }
    },
    data: {
    },
    networks: {
        pulsar: {
            driver: "overlay",
            attachable: true,
            name: "pulsar"
        }
    }
}
