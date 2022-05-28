/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Provide Digital Assistance',
    description: 'Provide Digital Assistance use cases provides curated and decision making information to the' +
        ' tactical operator. This could include suggestions to perform work, alerts to changing conditions, or' +
        ' automation of repetitive tasks.',
    method: 'capability/list',
    actors: {
        'TacticalOperator': 'uses'
    },
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

