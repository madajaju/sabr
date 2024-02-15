/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

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
