module.exports = {
    services: {
        sabr_sml_so_web: {
            type: "service",
            image: "sabr_sml_so_web",
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
