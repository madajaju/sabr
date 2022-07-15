/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Application',
    description: 'Manage Applications in the system. Including creating, deploying, and updating. Applications are' +
        ' primarily managed by DevOps engineers and developed by an application developer.',
    method: 'application/list',
    actors: {
        'DevOpsEngineer': 'uses',
        'ApplicationDeveloper': 'uses'
    },
};

