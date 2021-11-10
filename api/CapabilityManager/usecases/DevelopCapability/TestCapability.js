module.exports = {
    name: 'Test Capability',
    description: 'Test Capability is the description',
    method: "data/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapabilityT1', file:'./templates/capability.yml'}},
        { action: 'capability/build', parameters: {name:'myCapabilityT1'}},
        { action: 'capability/test', parameters: {name:'myCapabilityT1'}},
    ]
};

