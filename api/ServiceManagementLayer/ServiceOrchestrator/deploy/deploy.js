
module.exports = {
    name: '_so',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_so_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_so_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_so_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
