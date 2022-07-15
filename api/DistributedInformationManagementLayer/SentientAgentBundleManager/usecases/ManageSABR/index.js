/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage SABR',
    description: 'Manage SABR allows the devops engineers to create,deploy, updated and destroy SABRs in the system.',
    method: 'sabundle/list',
    actors: {
        'DevOpsEngineer': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};
