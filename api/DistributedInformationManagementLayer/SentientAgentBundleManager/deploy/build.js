
module.exports = {
    web: {
        dir: '..',
        cmd: 'node web/server.js',
        file: 'web/Dockerfile',
        tag: '_sabm_web',
        env: {
        }
    },
    gateway: {
        dir: '..',
        cmd: 'node gateway/server.js',
        file: 'gateway/Dockerfile',
        tag: '_sabm_gw',
        env: {

        }
    }
}
