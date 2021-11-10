module.exports = {
    name: 'Deploy SABR four',
    description: 'Deploy SABR is the description',
    method: "sabundle/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'sabundle create', parameters: {name:'mySABR3', file:'./templates/bundle3.js'}},
        { action: 'streampolicy create', parameters: {name:'historical', file:'./templates/policy1.js'}},
        { action: 'streampolicy create', parameters: {name:'summary', file:'./templates/policy2.js'}},
        { action: 'streampolicy create', parameters: {name:'realtime', file:'./templates/policy3.js'}},
        { action: 'sabm/bundle deploy', parameters: {sabr:'mySABR3', policies:'realtime'}},
    ]
};

