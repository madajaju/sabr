
module.exports = {
   /* sabr_web: {
        dir: '..',
        file: '../deploy/web/Dockerfile',
        tag: 'sabr_web',
        env: {
        }
    },

    */
    sabr_pulsar: {
        dir: '../deploy/pulsar',
        cmd: 'bin/pulsar standalone',
        file: '../deploy/pulsar/Dockerfile',
        tag: 'sabr_pulsar:standalone',
        env: {
        }
    },
    sabr_doc: {
        dir: '../docs',
        file: '../deploy/doc/Dockerfile',
        tag: 'sabr_doc',
        env: {
        }
    }
}
