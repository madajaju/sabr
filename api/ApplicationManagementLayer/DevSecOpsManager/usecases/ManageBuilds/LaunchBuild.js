module.exports = {
    name: 'Launch Build',
    description: 'Launch Build is the description',
    method: "build launch",
    actors: {
        'Actor': 'uses',
    },
    steps: [
        { action: 'build create', parameters: {name:'hello', file:'./templates/build.yml'}},
        { action: 'build launch', parameters: {name:'hello', parameter1: "State1", parameter2: "State2"}},
    ]
};

