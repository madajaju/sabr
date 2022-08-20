
module.exports = {
    name: 'sabr_aml',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_aml:local',
            design: './services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_aml:dev',
            design: './services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_aml:test',
            design: './services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_aml:prod',
            design: './services.js',
            env: {}
        }
    }
}
