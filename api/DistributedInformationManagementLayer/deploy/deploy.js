
module.exports = {
    name: '_diml',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_diml_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_diml_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_diml_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
