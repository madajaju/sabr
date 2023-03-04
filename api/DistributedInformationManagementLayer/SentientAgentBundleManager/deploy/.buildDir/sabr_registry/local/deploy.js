
module.exports = {
    name: 'sabr_diml_sabm',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'sabr_diml_sabm:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_diml_sabm:test',
            design: 'services-test.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_diml_sabm:prod',
            design: 'services.js',
            env: {}
        }
    }
}
