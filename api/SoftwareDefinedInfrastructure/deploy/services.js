module.exports = {
    services: {
        sabr_sdi_web: {
            type: "service",
            image: "sabr_sdi_web",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/sdi": { path: '/sa', port: 3000, protocol:"http"},
                "/sdi/socket.io": { path: '/sdi/socket.io', port: 3000, protocol:"http"},
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
