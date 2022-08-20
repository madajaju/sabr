
module.exports = {
    name: 'sabr_sdi',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'sabr_sdi:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_sdi:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_sdi:prod',
            design: 'services.js',
            env: {}
        }
    }
}
