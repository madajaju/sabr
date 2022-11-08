module.exports = {
    name: 'Create Build Environment',
    description: 'Create Build Environment is the description',
    method: "data/create",
    actors: {
        'Actor': 'uses',
    },
    steps: [
        { action: 'data/list', parameters: {name:'hello', file:'./templates/world.yml'}},
        { action: 'data/list', parameters: {name:'hello', file:'./templates/world.yml'}},
    ]
};

