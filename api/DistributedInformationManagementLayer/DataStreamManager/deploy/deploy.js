
module.exports = {
    name: '_dsm',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_pulsar:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_pulsar:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_pulsar:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_pulsar:prod',
            design: 'services.js',
            env: {}
        }
    }
}
