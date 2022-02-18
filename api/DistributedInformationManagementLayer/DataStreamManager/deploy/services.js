module.exports = {
    services: {
        pulsar: {
            image: "sabr_pulsar:local",
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
