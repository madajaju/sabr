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
    name: 'Create Policy',
    description: 'Create policies for the system which include ChannelCreationPolicies and ChannelActivationPolicies',
    method: "streampolicy create",
    actors: {
        'DataEngineer': 'uses',
    },
    steps: [
        { action: 'streampolicy create', parameters: {name:'policy1', file:'./templates/policy1.js'}},
        { action: 'streampolicy create', parameters: {name:'policy2', file:'./templates/policy2.js'}},
    ]
};
