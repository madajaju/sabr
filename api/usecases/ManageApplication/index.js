/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Capabilities',
    description: 'Manage Capabilities is the description',
    method: 'application/list',
    actors: {
        'ApplicationDeveloper': 'uses',
        'DevOpsEngineer': 'uses'
    },
};

