
module.exports = {
    name: 'sabr_aml_lc',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_aml_lc:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_aml_lc:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_aml_lc:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_aml_lc:prod',
            design: 'services.js',
            env: {}
        }
    }
}
