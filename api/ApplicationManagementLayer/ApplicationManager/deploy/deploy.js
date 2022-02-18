
module.exports = {
    name: '_am',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_am_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_am_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_am_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
