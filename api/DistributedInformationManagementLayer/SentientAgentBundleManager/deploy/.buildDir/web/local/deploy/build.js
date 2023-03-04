
module.exports = {
    web: {
        dir: '.',
        cmd: 'node web/server.js',
        file: 'web/Dockerfile',
        tag: 'sabr_diml_sabm_web',
        env: {
        }
    },
    sabr_service: {
        dir: '../../../..',
        cmd: 'node server.js',
        file: 'sabr/Dockerfile',
        tag: 'sabr_service',
        env: {

        }
    },
    sabr_registry: {
        dir: '.',
        cmd: 'registry',
        file: 'registry/Dockerfile',
        tag: 'sabr_registry',
        env: {

        }
    },
    sabr_builder: {
        dir: '.',
        cmd: 'entrypoint.sh',
        file: 'builder/Dockerfile',
        tag: 'sabr_builder',
        env: {

        }

    }
}
