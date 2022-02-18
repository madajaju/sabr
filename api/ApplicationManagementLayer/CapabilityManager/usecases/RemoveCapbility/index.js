/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Remove Capbility',
    description: 'Remove Capbility is the description',
    method: 'data/govern',
    actors: {
        'DevOpsEngineer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
};
