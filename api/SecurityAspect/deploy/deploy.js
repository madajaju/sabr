
module.exports = {
    name: '_s',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_s_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_s_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_s_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
