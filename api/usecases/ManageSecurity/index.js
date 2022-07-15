/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Security',
    description: 'Manage Security use case includes attestation of devices and services; prevention, detection,' +
        ' and remediation of cyber threats; and encryption and hash key management.',
    method: 'security/list',
    actors: {
        'SecurityOperator': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

