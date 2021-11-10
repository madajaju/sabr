/**
 * usecase.js
 *
 * @description :: This is a collection of scenarios that are mapped to nodejs machines.
 */

module.exports = {
    name: 'Find Enemy Combatant',
    description: 'Find Enemy Combatant is the description',
    method: 'capability/list',
    actors: {
        'TacticalOperator': 'uses'
    },
};

