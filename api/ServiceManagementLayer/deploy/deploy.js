
module.exports = {
    name: 'sabr_sml',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'sabr_sml:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_sml:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_sml:prod',
            design: 'services.js',
            env: {}
        }
    }
}
