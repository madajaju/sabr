
module.exports = {
    name: 's_km',
    contexts: {
        local: {
            type: 'swarm',
            tag: 's_km_dev',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 's_km_dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 's_km_test',
            design: 'services.js',
            file: 'docker-compose.yml',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 's_km_prod',
            design: 'services.js',
            env: {}
        }
    }
}
