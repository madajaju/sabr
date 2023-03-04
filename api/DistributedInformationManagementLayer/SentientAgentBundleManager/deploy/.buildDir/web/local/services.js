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
