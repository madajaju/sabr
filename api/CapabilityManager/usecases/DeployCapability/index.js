/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Deploy Capability',
    description: 'Deploy Capability is the description',
    method: 'data/govern',
    actors: {
        'DevOpsEngineer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

