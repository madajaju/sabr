
module.exports = {
    name: '_ia',
    contexts: {
        dev: {
            type: 'swarm',
            tag: '_ia_dev',
            file: 'docker-compose.yml',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: '_ia_test',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: '_ia_prod',
            file: 'docker-compose.yml',
            env: {}
        }
    }
}
