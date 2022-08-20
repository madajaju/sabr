
module.exports = {
    name: 'sabr_diml_dsm',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:prod',
            design: 'services.js',
            env: {}
        }
    }
}
