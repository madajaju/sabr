/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Capbilities',
    description: 'Manage Capbilities is the description',
    method: 'capability/list',
    actors: {
        'DevOpsEngineer': 'uses'
    },
};

