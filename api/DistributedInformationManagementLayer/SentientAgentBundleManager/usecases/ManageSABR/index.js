/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage SABR',
    description: 'Manage SABR is the description',
    method: 'bundle/list',
    actors: {
        'DevOpsEngineer': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

