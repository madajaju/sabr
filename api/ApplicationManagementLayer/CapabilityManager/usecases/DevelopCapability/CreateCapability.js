module.exports = {
    name: 'Create Capability',
    description: 'Create Capability is the description',
    method: "data/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapability1', file:'./templates/capability.js'}},
        { action: 'capability/create', parameters: {name:'myCapability2', file:'./templates/capability.js'}},
    ]
};

