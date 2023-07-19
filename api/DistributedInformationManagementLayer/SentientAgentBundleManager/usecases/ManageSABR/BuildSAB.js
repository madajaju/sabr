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
    name: 'Build SAB',
    description: 'Build the sentient agent bundle including the security vault, streams, transforms, etc..',
    method: "sabundle/build",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'bundle create', parameters: {name:'mySABR1', file:'./templates/bundle1.js'}},
        { action: 'diml sabm sabundle build', parameters: {name:'mySABR1'}},
    ]
};

