module.exports = {
    services: {
        ia_web: {
            type: "service",
            image: "sabr_ia_web",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/ia": { path: '/ia', port: 3000, protocol:"http"},
                "/ia/socket.io": { path: '/ia/socket.io', port: 3000, protocol:"http"},
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
