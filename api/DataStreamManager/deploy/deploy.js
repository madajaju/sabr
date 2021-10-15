
module.exports = {
    name: '_dsm',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_dsm_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_dsm_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_dsm_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
