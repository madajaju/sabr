
module.exports = {
    name: '_s',
    contexts: {
        local: {
            type: 'swarm',
            tag: '_s_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: '_s_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_s_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_s_prod',
            design: 'services.js',
            env: {}
        }
    }
}
