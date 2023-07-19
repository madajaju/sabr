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
    name: 'Deploy SABR two',
    description: 'Deploy SABR with policies.',
    method: "sabundle/deploy",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'bundle create', parameters: {name:'mySABR2', file:'./templates/bundle2.js'}},
        { action: 'streampolicy create', parameters: {name:'historical', file:'./templates/policy1.js'}},
        { action: 'streampolicy create', parameters: {name:'summary', file:'./templates/policy2.js'}},
        { action: 'streampolicy create', parameters: {name:'realtime', file:'./templates/policy3.js'}},
        { action: 'diml/sabm/bundle deploy', parameters: {sabr:'mySABR2', policies:'realtime'}},
    ]
};

