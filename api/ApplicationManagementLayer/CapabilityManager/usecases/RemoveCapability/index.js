/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Remove Capability',
    description: 'Remove Capability allows a DevOps Engineer to remove a capability from the ecosystem. This will' +
        ' remove all SABRs controlled and managed by the capability. It will not remove SABRs that are used by other' +
        ' Capabilties.',
    method: 'capability/remove',
    actors: {
        'DevOpsEngineer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
};

