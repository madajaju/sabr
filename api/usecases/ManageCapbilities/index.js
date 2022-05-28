/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Capabilities',
    description: 'Manage Capabilities use cases gives DevOps Engineers and IT Operations the ability to deploy and' +
        ' manage new capabilities in the system. A capability can be a set of workflows or applications that when' +
        ' working together provide value to the tactical operator.',
    method: 'capability/list',
    actors: {
        'DevOpsEngineer': 'uses',
        'ITOperations': 'uses'
    },
};

