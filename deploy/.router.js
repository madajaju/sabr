/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
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
