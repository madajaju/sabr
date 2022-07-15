module.exports = {
    name: 'Remove multiple SABRs from the Capability',
    description: 'Remove multiple SABRs from a running Capability',
    method: "capability/update",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myUpdateCap3', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap3', file:'./templates/capabilityAddSABRs.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap3' }},
    ]
};

