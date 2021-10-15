module.exports = {
    name: 'Release Capability',
    description: 'Release Capability is the description',
    method: "data/create",
    actors: {
        'Actor': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapabilityT1', file:'./templates/capability.yml'}},
        { action: 'capability/build', parameters: {name:'myCapabilityT1'}},
        { action: 'capability/test', parameters: {name:'myCapabilityT1'}},
        { action: 'capability/release', parameters: {name:'myCapabilityT1'}},
    ]
};

