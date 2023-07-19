/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

// There is a base directory implied. /usr/src/app
module.exports = {
    sabr_sa_esc: {
        dir: '..',
        cmd: 'node controller/server.js',
        file: 'controller/Dockerfile',
        tag: 'sabr_sa_esc',
        env: {},
        packages: [
            "EdgeSecurityController"
        ]
    },
}
