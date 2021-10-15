
module.exports = {
    name: '_sabm',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_sabm_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_sabm_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_sabm_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
