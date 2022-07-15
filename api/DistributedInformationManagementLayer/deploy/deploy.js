
module.exports = {
    name: 'sabr_diml',
    contexts: {
        local: {
            type: 'stack',
            tag: 'sabr_diml:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'stack',
            tag: 'sabr_diml:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'stack',
            tag: 'sabr_diml:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'stack',
            tag: 'sabr_diml:prod',
            design: 'services.js',
            env: {}
        }
    }
}
