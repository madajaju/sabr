module.exports = {
    services: {
        sabr_sa_web: {
            type: "service",
            image: "sabr_sa_web",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/sa": { path: '/sa', port: 3000, protocol:"http"},
                "/sa/socket.io": { path: '/sa/socket.io', port: 3000, protocol:"http"},
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
