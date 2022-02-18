module.exports = {
    name: 'Deploy SABR',
    description: 'Deploy SABR is the description',
    method: "sabundle/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'sabundle create', parameters: {name:'mySABR1', file:'./templates/bundle1.js'}},
        { action: 'streampolicy create', parameters: {name:'historical', file:'./templates/policy1.js'}},
        { action: 'streampolicy create', parameters: {name:'summary', file:'./templates/policy2.js'}},
        { action: 'streampolicy create', parameters: {name:'realtime', file:'./templates/policy3.js'}},
        { action: 'diml/sabm/bundle deploy', parameters: {sabr:'mySABR1', policies:'realtime'}},
    ]
};

