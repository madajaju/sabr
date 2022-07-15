module.exports = {
    '/lc': {
        target: 'http://web:3000',
        ws: true,
        pathRewrite: {
            '^/lc': '/'
        },
        service: 'web',
        logLevel: 'debug',
        changeOrigin: true
    },
    '/lc/socket.io': {
        target: 'http://web:3000',
        ws: true,
        pathRewrite: {
            '^/lc/socket.io': '/socket.io'
        },
        service: 'web',
        logLevel: 'debug',
        changeOrigin: true
    },
};
