
module.exports = {
    name: 'sabr_ia',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'sabr_ia:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_ia:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_ia:prod',
            design: 'services.js',
            env: {}
        }
    }
}
