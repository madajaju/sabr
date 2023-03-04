module.exports = {
    '/web': {
        target: 'http://web:3000',
        ws: true,
        pathRewrite: {
            '^/web': '/web'
        },
        service: 'web',
        logLevel: 'debug',
        changeOrigin: true
    },
    '/web/socket.io': {
        target: 'http://web:3000',
        ws: true,
        pathRewrite: {
            '^/web/socket.io': '/web/socket.io'
        },
        service: 'web',
        logLevel: 'debug',
        changeOrigin: true
    },
    '/pulsar/': {
        target: 'http://pulsar:6650',
        ws: true,
        pathRewrite: {
            '^/pulsar/': '/'
        },
        service: 'pulsar',
        logLevel: 'debug',
        changeOrigin: true
    },
    '/_padmin/': {
        target: 'http://pulsar:8080',
        ws: true,
        pathRewrite: {
            '^/_padmin/': '/'
        },
        service: 'pulsar',
        logLevel: 'debug',
        changeOrigin: true
    },
    '/docs': {
        target: 'http://doc:4000',
        ws: true,
        pathRewrite: {
            '^/docs': '/docs'
        },
        service: 'doc',
        logLevel: 'debug',
        changeOrigin: true
    },
};
