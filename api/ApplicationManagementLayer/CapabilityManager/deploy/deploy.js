
module.exports = {
    name: 'sabr_aml_cm',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_aml_cm:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_aml_cm:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_aml_cm:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_aml_cm:prod',
            design: 'services.js',
            env: {}
        }
    }
}
