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
    name: 'Provide Mission Insight',
    description: 'Provide Mission Insight use cases analyses the data on the edge and in the data center to provide' +
        ' insight to business and mission problems through data analytics techniques',
    method: 'capability/list',
    actors: {
        'Tactical Operator': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

