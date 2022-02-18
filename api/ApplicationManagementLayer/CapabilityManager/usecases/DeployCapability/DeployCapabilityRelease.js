module.exports = {
    name: 'Deploy Capability Release',
    description: 'Deploy Capability Release is the description',
    method: "data/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myCapability1', file:'./templates/capability.js'}},
        { action: 'aml cm capability deploy', parameters: {capability:'myCapability1' }},
    ]
};

