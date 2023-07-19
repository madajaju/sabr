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
    name: 'Remove a SABR from the Capability',
    description: 'Remove a SABR of a running Capability',
    method: "capability/update",
    actors: {
        'DevOpsEngineer': 'uses',
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'UpdateCap3', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap3', file:'./templates/capabilityRemoveSABR.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap3' }},
    ]
};

