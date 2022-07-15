/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Manage Policies',
    description: 'Manage Policies use case includes establishing and managing DDIL environment policies for the' +
        ' complete ecosystem, individual capabilities, SABRs, and applications. This use case also refers to' +
        ' orchestration and deployment policies.',
    method: 'policy/list',
    actors: {
        'ITOperations': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

