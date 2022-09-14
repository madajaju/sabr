module.exports = {
    name: 'Create SAB',
    description: 'Build the sentient agent bundle including the security vault, streams, transforms, etc..',
    method: "sabundle/build",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'sabundle create', parameters: {name:'mySABR1', file:'./templates/bundle1.js'}},
        { action: 'diml sabm sabundle build', parameters: {name:'mySABR1'}},
    ]
};

