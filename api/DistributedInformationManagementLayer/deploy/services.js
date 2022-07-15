module.exports = {
    services: {
        dsm: {
            type: "stack",
            image: "sabr_diml_dsm",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/dsm": { path: '/', port: 3000, protocol:"http"},
                "/dsm/socket.io": { path: '/socket.io', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: { },
        },
        sabm: {
            type: "stack",
            image: 'sabr_diml_sabm',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/sabm": { path: '/', port: 3000, protocol:"http"},
                "/sabm/socket.io": { path: '/socket.io', port: 3000, protocol:"http"},
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
