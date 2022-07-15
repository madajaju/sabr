module.exports = {
    name: 'Update Policies of the Capability',
    description: 'Update Policy of a Running Capability',
    method: "capability/update",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myUpdateCap6', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap6' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap6' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap6', file:'./templates/capabilityUpdatePolicies.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap6' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap6' }},
    ]
};

