
module.exports = {
    name: '_cpl',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_cpl_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_cpl_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_cpl_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
