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
    name: 'Update Application',
    description: 'A DevSecOps engineer utilizes the DevSecOps pipeline to update an application that has been' +
        ' deployed in the ecosystem. There are several updating models that can be utilized to update the' +
        ' application, including staggered updates, and blue-green updates.',
    method: "application/update",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'application/update', parameters: {name:'hello', file:'./templates/world.yml'}},
    ]
};

