
module.exports = {
    serviceA: {
        dir: '..',
        file: 'web/Dockerfile',
        tag: 'sabr_web',
        env: {
        }
    },
    pulsar: {
        dir: '.',
        cmd: 'bin/pulsar standalone',
        file: 'pulsar/Dockerfile',
        tag: 'sabr_pulsar:standalone',
        env: {
        }
    },
    doc: {
        dir: '../docs',
        file: '../deploy/doc/Dockerfile-jekyll',
        tag: 'sabr_doc',
        env: {
        }
    }
}
