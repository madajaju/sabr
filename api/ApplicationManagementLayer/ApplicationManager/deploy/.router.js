module.exports = {
    '/am': {
        target: 'http://web:3000',
        ws: true,
        pathRewrite: {
            '^/am': '/'
        },
        service: 'web',
        logLevel: 'debug',
        changeOrigin: true
    },
    '/am/socket.io': {
        target: 'http://web:3000',
        ws: true,
        pathRewrite: {
            '^/am/socket.io': '/socket.io'
        },
        service: 'web',
        logLevel: 'debug',
        changeOrigin: true
    },
};
