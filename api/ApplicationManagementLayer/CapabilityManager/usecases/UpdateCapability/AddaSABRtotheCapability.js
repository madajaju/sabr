module.exports = {
    name: 'Add a SABR to the Capability',
    description: 'Add a SABR of the a running capability.',
    method: "capability/update",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myUpdateCap1', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap1' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap1' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap1', file:'./templates/capabilityUpdateAddSABR.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap1' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap1' }},
    ]
};

