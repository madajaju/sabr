
module.exports = {
    web: {
        dir: '.',
        cmd: 'node web/server.js',
        file: 'web/Dockerfile',
        tag: 'sabr_diml_sabm_web',
        env: {
        }
    },
    sabr: {
        dir: '.',
        cmd: 'node gateway/server.js',
        file: 'sabr/Dockerfile',
        tag: 'sabr_diml_sabm_sabr',
        env: {

        }
    }
}
