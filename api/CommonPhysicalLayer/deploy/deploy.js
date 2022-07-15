
module.exports = {
    name: 'sabr_cpl',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_cpl:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_cpl:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_cpl:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_cpl:prod',
            design: 'services.js',
            env: {}
        }
    }
}
