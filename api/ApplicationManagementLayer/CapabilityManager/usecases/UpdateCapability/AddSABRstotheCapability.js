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
    name: 'Add SABRs to the Capability',
    description: 'Add Multiple SABRs to a running Capability',
    method: "capability/update",
    actors: {
        'ApplicationDeveloper': 'uses',
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'UpdateCap2', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap2' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap2' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap2', file:'./templates/capabilityUpdateAddSABRs.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap2' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap2' }},
    ]
};

