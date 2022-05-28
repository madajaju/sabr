/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Integrate Learning',
    description: 'Integrate Learning allows application developers to integrate learnings from the AI algorithms' +
        ' into applications. This allows the insight gained from the AI models to be used to aid the tactical' +
        ' operator, helps an application run more effectively, or provide information to a high level orchestrator.',
    method: 'application/list',
    actors: {
        'ApplicationDeveloper': 'uses'
    },
    extends: ["Provide Digital Assistance"]
    // Shows dependency
    // includes: ["UseCase Name"],
    // Show Aggreation from a super use case
    // extends: ["UseCase Name"],
};

