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
    name: 'Deploy Capability Release',
    description: 'Deploy Capability Release allows a capability to be deployed into the ecosystem, which can include' +
        ' several SABRs in the ecosystem across a set of heterogeneous resources.',
    method: "capability/deploy",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myCapability1', file:'./templates/capability.js'}},
        { action: 'aml cm capability build', parameters: {name:'myCapability1' }},
        { action: 'aml cm capability deploy', parameters: {capability:'myCapability1' }},
    ]
};

