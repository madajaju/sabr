module.exports = {
    services: {
        sabr: {
            image: "sabr",
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
            image: "sabr_pulsar",
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
