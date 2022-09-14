/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Capabilities',
    description: 'Capabilities are a group of SABRs that run together to provide functionality for the system.' +
        ' Deploying, updating and managing capabilities allows engineers and developers the ability to deploy groups' +
        ' of SABRs together.',
    method: 'capability/show',
    actors: {
        'ApplicationDeveloper': 'uses',
        'DevOpsEngineer': 'uses'
    },
};

