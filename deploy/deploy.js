
module.exports = {
    name: 'sabr',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr:prod',
            design: 'services.js',
            env: {}
        }
    }
}
