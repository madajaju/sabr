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
    name: 'Build Capability',
    description: 'Build capability allows a DevOps engineer to build a capability that gets deployed into the' +
        ' ecosystem.',
    method: "capability/build",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapabilityB1', file:'./templates/capability.js'}},
        { action: 'aml/cm/capability/build', parameters: {name:'myCapabilityB1'}},
    ]
};

