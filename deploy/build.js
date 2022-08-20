
module.exports = {
    sabr_web: {
        dir: '..',
        file: 'deploy/web/Dockerfile',
        tag: 'sabr_web',
        env: {
        }
    },
    sabr_pulsar: {
        dir: './pulsar',
        cmd: 'bin/pulsar standalone',
        file: 'Dockerfile',
        tag: 'sabr_pulsar:standalone',
        env: {
        }
    },
    sabr_doc: {
        dir: '../docs',
        file: '../deploy/doc/Dockerfile-jekyll',
        tag: 'sabr_doc',
        env: {
        }
    }
}
