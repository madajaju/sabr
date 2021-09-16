
module.exports = {
    name: 'sabr',
    contexts: {
        dev: {
            type: 'swarm',
            tag: 'sabr_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
