module.exports = {
    'pulsar': {
        target: 'http://pulsar:6650',
        ws: true,
        pathRewrite: {
            '^pulsar': '/pulsar'
        },
        service: 'pulsar',
        logLevel: 'debug',
        changeOrigin: true
    },
    'pulsaradmin': {
        target: 'http://pulsar:8081',
        ws: true,
        pathRewrite: {
            '^pulsaradmin': '/pulsar-admin'
        },
        service: 'pulsar',
        logLevel: 'debug',
        changeOrigin: true
    },
};
