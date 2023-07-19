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
    name: 'Manage AI Model',
    description: 'Manage AI Model allows the data users to create, destroy, and update models, version control them' +
        ' and deploy them in the system.',
    method: 'aimodel/list',
    actors: {
        'DataEngineer': 'uses',
        'DataScientist': 'uses',
        'DataAnalyst': 'uses',
    },
};

