/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Deploy Capability',
    description: 'Deploy a capability into the ecosystem. This should deploy all of the SABRs in the capability or' +
        ' attach to currently running SABRs in the defined capabiility.',
    method: 'capability/deploy',
    actors: {
        'DevOpsEngineer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

