/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Develop Capability',
    description: 'Develop Capability allows the application developer to develop a capability that contains multiple' +
        ' SABRs that working together to provide the capability.',
    method: 'capability/show',
    actors: {
        'Application Developer': 'uses'
    },
    extends: [ 'Manage Capabilities' ],
};
