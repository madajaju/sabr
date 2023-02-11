// There is a base directory implied. /usr/src/app
module.exports = {
    sabr_sa_esc: {
        dir: '..',
        cmd: 'node controller/server.js',
        file: 'controller/Dockerfile',
        tag: 'sabr_sa_esc',
        env: {},
        packages: [
            "EdgeSecurityController"
        ]
    },
}
