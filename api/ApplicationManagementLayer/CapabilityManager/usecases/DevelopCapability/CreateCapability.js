module.exports = {
    name: 'Create Capability',
    description: 'Create Capability allows for a capability to be created in the ecosystem. A capability contains a' +
        ' set of SABRs that work together to provide specific solutions in the ecosystem.',
    method: "capability/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapability1', file:'./templates/capability.js'}},
        { action: 'capability/create', parameters: {name:'myCapability2', file:'./templates/capability.js'}},
    ]
};

