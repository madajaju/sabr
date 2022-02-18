
module.exports = {
    name: '_sml',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_sml_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_sml_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_sml_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
