/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Integrate Learning',
    description: 'Integrate Learning allows application developers to integrate learnings from the AI algorithms' +
        ' into applications. This allows the insight gained from the AI models to be used to aid the tactical' +
        ' operator, helps an application run more effectively, or provide information to a high level orchestrator.',
    method: 'application/list',
    actors: {
        'ApplicationDeveloper': 'uses'
    },
    extends: ["Provide Digital Assistance"]
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

