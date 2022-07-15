module.exports = {
    name: 'Update Configuration of the Capability',
    description: 'Update Configuration of a running Capability',
    method: "capability/update",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability create', parameters: {name:'myUpdateCap5', file:'./templates/capability.js'}},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap5' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap5' }},
        { action: 'aml cm capability update', parameters: {capability:'UpdateCap5', file:'./templates/capabilityUpdateConfig.js' }},
        { action: 'aml cm capability release', parameters: {capability:'UpdateCap5' }},
        { action: 'aml cm capability deploy', parameters: {capability:'UpdateCap5' }},
    ]
};

