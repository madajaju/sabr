
module.exports = {
    name: 'a_d',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'a_d_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'a_d_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'a_d_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'a_d_prod',
            design: 'services.js',
            env: {}
        }
    }
}
