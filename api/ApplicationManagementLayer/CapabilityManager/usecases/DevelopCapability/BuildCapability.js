module.exports = {
    name: 'Build Capability',
    description: 'Build capability allows a DevOps engineer to build a capability that gets deployed into the' +
        ' ecosystem.',
    method: "capability/build",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapabilityB1', file:'./templates/capability.yml'}},
        { action: 'capability/build', parameters: {name:'myCapabilityB1'}},
    ]
};

