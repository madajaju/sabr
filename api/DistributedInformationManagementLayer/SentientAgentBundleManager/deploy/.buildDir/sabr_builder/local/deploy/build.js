
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
    web: {
        dir: 'web',
        cmd: 'node web/server.js',
        file: 'Dockerfile',
        tag: 'sabr_diml_sabm_web',
        env: {
        }
    },
    sabr_service: {
        dir: 'sabr',
        cmd: 'node server.js',
        file: 'Dockerfile',
        tag: 'sabr_service',
	packages: [ "DistributedInformationManagementLayer", "ServiceManagementLayer", "ApplicationManagementLayer" ],
        env: {

        }
    },
    sabr_registry: {
        dir: 'registry',
        cmd: 'registry',
        file: 'Dockerfile',
        tag: 'sabr_registry',
        env: {

        }
    },
    sabr_builder: {
        dir: 'builder',
        cmd: 'entrypoint.sh',
        file: 'Dockerfile',
        tag: 'sabr_builder',
        env: {

        }

    }
}
