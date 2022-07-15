
module.exports = {
    name: 'sabr_aml_am',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_aml_am:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_aml_am:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_aml_am:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_aml_am:prod',
            design: 'services.js',
            env: {}
        }
    }
}
