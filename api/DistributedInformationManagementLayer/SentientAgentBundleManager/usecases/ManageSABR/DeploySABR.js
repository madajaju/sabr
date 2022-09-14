module.exports = {
    name: 'Deploy SABR',
    description: 'Deploy SABR in the system.',
    method: "sabundle/deploy",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'sabundle create', parameters: {name:'mySABR1', file:'./templates/bundle1.js'}},
        { action: 'streampolicy create', parameters: {name:'historical', file:'./templates/policy1.js'}},
        { action: 'streampolicy create', parameters: {name:'summary', file:'./templates/policy2.js'}},
        { action: 'streampolicy create', parameters: {name:'realtime', file:'./templates/policy3.js'}},
        // Build the bundle
        { action: 'diml/sabm/bundle deploy', parameters: {sabr:'mySABR1', policies:'realtime'}},
    ]
};

