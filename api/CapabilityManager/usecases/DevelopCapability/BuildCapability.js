module.exports = {
    name: 'Build Capability',
    description: 'Build Capability is the description',
    method: "data/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapabilityB1', file:'./templates/capability.yml'}},
        { action: 'capability/build', parameters: {name:'myCapabilityB1'}},
    ]
};

