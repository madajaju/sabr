
module.exports = {
    name: 'sabr_sml_so',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'sabr_sml_so:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_sml_so:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_sml_so:prod',
            design: 'services.js',
            env: {}
        }
    }
}
