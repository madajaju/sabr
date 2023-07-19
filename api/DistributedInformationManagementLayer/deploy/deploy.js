
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
