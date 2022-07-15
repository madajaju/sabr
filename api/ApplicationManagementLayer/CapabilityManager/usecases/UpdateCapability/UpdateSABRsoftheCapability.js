module.exports = {
    name: 'Update SABRs of the Capability',
    description: 'Update SABRs of a running Capability',
    method: "capability/update",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myUpdateCap7', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap7' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap7' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap7', file:'./templates/capabilityUpdateSABRs.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap7' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap7' }},
    ]
};

