module.exports = {
    services: {
        cpl_web: {
            type: "service",
            image: "sabr_cpl_web",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/cpl": { path: '/cpl', port: 3000, protocol:"http"},
                "/cpl/socket.io": { path: '/cpl/socket.io', port: 3000, protocol:"http"},
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