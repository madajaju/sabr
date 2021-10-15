/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Update Capbility',
    description: 'Update Capbility is the description',
    method: 'data/govern',
    actors: {
        'Software Developer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
};

