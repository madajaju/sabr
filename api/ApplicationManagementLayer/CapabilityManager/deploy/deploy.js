
module.exports = {
    name: '_cm',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_cm_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_cm_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_cm_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
