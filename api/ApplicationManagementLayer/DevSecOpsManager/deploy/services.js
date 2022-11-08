module.exports = {
    services: {
        web: {
            image: 'a_d_web',
            volumes: {
                docker: { source: "/var/run/docker.sock", target: "/var/run/docker.sock" }
            },
            interface: {
                "/d": { path: '/', port: 3000, protocol:"http"},
                "/d/socket.io": { path: '/socket.io', port: 3000, protocol:"http"},
            },
            policies: { },
            environment: {
            },
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
