/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage AI Model',
    description: 'Manage AI Model is the description',
    method: 'aimodel/list',
    actors: {
        'AIDeveloper': 'uses'
    },
};

