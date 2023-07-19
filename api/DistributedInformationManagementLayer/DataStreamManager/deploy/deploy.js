
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
    name: 'sabr_diml_dsm',
    contexts: {
        local: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:local',
            design: 'services.js',
            env: {}
        },
        dev: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:dev',
            design: 'services.js',
            env: {}
        },
        test: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:test',
            design: 'services.js',
            env: {}
        },
        prod: {
            type: 'swarm',
            tag: 'sabr_diml_dsm:prod',
            design: 'services.js',
            env: {}
        }
    }
}
