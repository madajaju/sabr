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
    name: 'Create SABR',
    description: 'Create SABR in the system.',
    method: "sabundle/create",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'bundle create', parameters: {name:'mySABR1', file:'./templates/bundle1.js'}},
        { action: 'bundle create', parameters: {name:'mySABR2', file:'./templates/bundle2.js'}},
        { action: 'bundle create', parameters: {name:'mySABR3', file:'./templates/bundle3.js'}},
        { action: 'bundle create', parameters: {name:'mySABR4', file:'./templates/bundle4.js'}},
    ]
};

