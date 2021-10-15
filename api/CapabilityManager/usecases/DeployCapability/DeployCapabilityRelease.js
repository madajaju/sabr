module.exports = {
    name: 'Deploy Capability Release',
    description: 'Deploy Capability Release is the description',
    method: "data/create",
    actors: {
        'Actor': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapability1', file:'./templates/capability.js'}},
        { action: 'cm/capability/deploy', parameters: {capability:'myCapability1' }},
    ]
};

