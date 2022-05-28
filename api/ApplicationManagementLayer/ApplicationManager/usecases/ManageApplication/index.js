/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Application',
    description: 'Manage Applications in the system. Including deploying, and updating',
    method: 'application/list',
    actors: {
        'DevOpsEngineer': 'uses',
        'ApplicationDeveloper': 'uses'
    },
};

