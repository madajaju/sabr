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
                "PULSAR_HOST": "localhost/_padmin",
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
                "/docs": { path: '/', port: 4000, protocol:"http"},
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
