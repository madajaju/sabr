


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
    web: {
        dir: '.',
        cmd: 'node web/server.js',
        file: 'web/Dockerfile',
        tag: 'sabr_diml_sabm_web',
        env: {
        }
    },
    sabr_service: {
        dir: '.',
        cmd: 'node server.js',
        file: 'sabr/Dockerfile',
        tag: 'sabr_service',
        packages: [
            'DistributedInformationManagement'
        ],
        env: {

        }
    },
    sabr_registry: {
        dir: '.',
        cmd: 'registry',
        file: 'registry/Dockerfile',
        tag: 'sabr_registry',
        env: {

        }
    },
    sabr_builder: {
        dir: '.',
        cmd: 'entrypoint.sh',
        file: 'builder/Dockerfile',
        tag: 'sabr_builder',
        env: {

        }

    }
}
