module.exports = {
    services: {
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
        am: {
            type: "stack",
            image: "am",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                am: {path:'/am', port: 3000 },
            }
        },
        cm: {
            type: "stack",
            image: "cm",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                cm: {path:'/cm', port: 3000 },
            }
        },
        dsm: {
            type: "stack",
            image: "dsm",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                dsm: {path:'/dsm', port: 3000 },
            }
        },
        sa: {
            type: "stack",
            image: "sa",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                sa: {path:'/sa', port: 3000 },
            }
        },
        lc: {
            type: "stack",
            image: "lc",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                lc: {path:'/lc', port: 3000 },
            }
        },
        sabm: {
            type: "stack",
            image: "sabm",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                sabm: {path:'/sabm', port: 3000 },
            }
        },
        so: {
            type: "stack",
            image: "so",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                so: {path:'/so', port: 3000 },
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
