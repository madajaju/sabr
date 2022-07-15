module.exports = {
    name: 'Add SABRs to the Capability',
    description: 'Add Multiple SABRs to a running Capability',
    method: "capability/update",
    actors: {
        'Actor': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myUpdateCap2', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap2' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap2' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap2', file:'./templates/capabilityUpdateAddSABRs.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap2' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap2' }},
    ]
};

