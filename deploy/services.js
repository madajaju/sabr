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
        /*
        admin: {
            image: "sabr_admin",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                admin: { path: '/admin', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: { },
        },
         */
        aml: {
            type: "stack",
            image: "sabr_aml",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                am: {path:'/am', port: 3000 },
            }
        },
        cpl: {
            type: "stack",
            image: "sabr_cpl",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                cm: {path:'/cpl', port: 3000 },
            }
        },
        diml: {
            type: "stack",
            image: "sabr_diml",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                diml: {path:'/diml', port: 3000 },
            }
        },
        sa: {
            type: "stack",
            image: "sabr_sa",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                sa: {path:'/sa', port: 3000 },
            }
        },
        sml: {
            type: "stack",
            image: "sabr_sml",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                sml: {path:'/sml', port: 3000 },
            }
        },
        sdi: {
            type: "stack",
            image: "sabr_sdi",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                sdi: {path:'/sdi', port: 3000 },
            }
        },
        ia: {
            type: "stack",
            image: "sabr_ia",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                ia: {path:'/ia', port: 3000 },
            }
        },
        doc: {
            image: "sabr_doc",
            interface: {
                web: {path:'/doc', port: 8088 },
            },
            networks: {
                siblings: {}
            }
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
