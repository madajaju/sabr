module.exports = {
    name: 'Deploy SABR two',
    description: 'Deploy SABR is the description',
    method: "sabundle/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'sabundle create', parameters: {name:'mySABR2', file:'./templates/bundle2.js'}},
        { action: 'streampolicy create', parameters: {name:'historical', file:'./templates/policy1.js'}},
        { action: 'streampolicy create', parameters: {name:'summary', file:'./templates/policy2.js'}},
        { action: 'streampolicy create', parameters: {name:'realtime', file:'./templates/policy3.js'}},
        { action: 'diml/sabm/bundle deploy', parameters: {sabr:'mySABR2', policies:'realtime'}},
    ]
};

