module.exports = {
    name: 'Test Capability',
    description: 'Test Capability allows DevOps Engineers to test a capability before it is released. This is part' +
        ' of the DevSecOps process.',
    method: "capability/test",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapabilityT1', file:'./templates/capability.yml'}},
        { action: 'capability/build', parameters: {name:'myCapabilityT1'}},
        { action: 'capability/test', parameters: {name:'myCapabilityT1'}},
    ]
};

