
module.exports = {
    name: 'sa_esc',
    contexts: {
        local: {
            type: 'service',
            tag: 'sa_esc_dev',
            env: {}
        },
        dev: {
            type: 'service',
            tag: 'sa_esc_dev',
            env: {}
        },
        test: {
            type: 'service',
            tag: 'sa_esc_test',
            env: {}
        },
        prod: {
            type: 'service',
            tag: 'sa_esc_prod',
            design: 'services.js',
            env: {}
        }
    }
}
