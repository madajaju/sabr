
module.exports = {
    name: '_lc',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_lc_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_lc_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_lc_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
