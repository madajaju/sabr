/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Provide Mission Insight',
    description: 'Provide Mission Insight use cases analyses the data on the edge and in the data center to provide' +
        ' insight to business and mission problems through data analytics techniques',
    method: 'capability/list',
    actors: {
        'Tactical Operator': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

