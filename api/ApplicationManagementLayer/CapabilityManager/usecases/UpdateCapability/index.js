/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Update Capability',
    description: 'Update Capability allows a DevOps Engineer to update a capability in the ecosystem. This might' +
        ' include updating configurations, updating SABRs, removing SABRs, or adding SABRs to and existing capability.',
    method: 'capability/update',
    actors: {
        'DevOpsEngineer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
};

