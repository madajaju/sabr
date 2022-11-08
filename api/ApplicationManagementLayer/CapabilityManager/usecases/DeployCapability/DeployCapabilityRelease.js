module.exports = {
    name: 'Deploy Capability Release',
    description: 'Deploy Capability Release allows a capability to be deployed into the ecosystem, which can include' +
        ' several SABRs in the ecosystem across a set of heterogeneous resources.',
    method: "capability/deploy",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myCapability1', file:'./templates/capability.js'}},
        { action: 'aml cm capability build', parameters: {name:'myCapability1' }},
        { action: 'aml cm capability deploy', parameters: {capability:'myCapability1' }},
    ]
};

