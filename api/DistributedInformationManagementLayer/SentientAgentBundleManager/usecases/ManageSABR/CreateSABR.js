module.exports = {
    name: 'Create SABR',
    description: 'Create SABR is the description',
    method: "sabundle/create",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'sabundle create', parameters: {name:'mySABR1', file:'./templates/bundle1.js'}},
        { action: 'sabundle create', parameters: {name:'mySABR2', file:'./templates/bundle2.js'}},
        { action: 'sabundle create', parameters: {name:'mySABR3', file:'./templates/bundle3.js'}},
        { action: 'sabundle create', parameters: {name:'mySABR4', file:'./templates/bundle4.js'}},
    ]
};

