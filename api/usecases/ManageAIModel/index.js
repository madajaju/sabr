/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage AI Model',
    description: 'Manage AI Model allows the data users to create, destroy, and update models, version control them' +
        ' and deploy them in the system.',
    method: 'aimodel/list',
    actors: {
        'DataEngineer': 'uses',
        'DataScientist': 'uses',
        'DataAnalyst': 'uses',
    },
};

