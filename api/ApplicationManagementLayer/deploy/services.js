module.exports = {
    services: {
        am: {
            type: "stack",
            image: "sabr_aml_am",
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/am": { path: '/', port: 3000, protocol:"http"},
                "/am/socket.io": { path: '/socket.io', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: { },
        },
        cm: {
            type: "stack",
            image: 'sabr_aml_cm',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/cm": { path: '/', port: 3000, protocol:"http"},
                "/cm/socket.io": { path: '/socket.io', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: { },
        },
        lc: {
            type: "stack",
            image: 'sabr_aml_lc',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/lc": { path: '/', port: 3000, protocol:"http"},
                "/lc/socket.io": { path: '/socket.io', port: 3000, protocol:"http"},
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
