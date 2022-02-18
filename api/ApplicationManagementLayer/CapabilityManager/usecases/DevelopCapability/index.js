/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Develop Capability',
    description: 'Develop Capability is the description',
    method: 'capability/list',
    actors: {
        'Software Developer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
};
