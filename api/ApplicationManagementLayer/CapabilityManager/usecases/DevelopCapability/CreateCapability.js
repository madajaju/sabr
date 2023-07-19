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
    name: 'Create Capability',
    description: 'Create Capability allows for a capability to be created in the ecosystem. A capability contains a' +
        ' set of SABRs that work together to provide specific solutions in the ecosystem.',
    method: "capability/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapability1', file:'./templates/capability.js'}},
        { action: 'capability/create', parameters: {name:'myCapability2', file:'./templates/capability.js'}},
    ]
};

