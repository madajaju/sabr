
module.exports = {
    name: 'sabr_sa',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'sabr_sa:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_ss:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_sa:prod',
            design: 'services.js',
            env: {}
        }
    }
}
