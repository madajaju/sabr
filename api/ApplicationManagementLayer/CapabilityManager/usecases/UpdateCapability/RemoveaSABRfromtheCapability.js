module.exports = {
    name: 'Remove a SABR from the Capability',
    description: 'Remove a SABR of a running Capability',
    method: "capability/update",
    actors: {
        'DevOpsEngineer': 'uses',
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myUpdateCap3', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap3', file:'./templates/capabilityRemoveSABR.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap3' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap3' }},
    ]
};

