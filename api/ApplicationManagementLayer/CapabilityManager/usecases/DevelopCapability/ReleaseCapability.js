module.exports = {
    name: 'Release Capability',
    description: 'Release Capability allows a capability to be released which includes creating a package that' +
        ' contains a sat of signed and certified SABRs that talk to each other to deliver capabilities to the' +
        ' ecosystem. When the capability is released it contains a hash that can be checked when deployed.',
    method: "capability/release",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'capability/create', parameters: {name:'myCapabilityT1', file:'./templates/capability.yml'}},
        { action: 'capability/build', parameters: {name:'myCapabilityT1'}},
        { action: 'capability/test', parameters: {name:'myCapabilityT1'}},
        { action: 'capability/release', parameters: {name:'myCapabilityT1'}},
    ]
};

