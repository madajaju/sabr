module.exports = {
    name: 'Update Application',
    description: 'Update Application is the description',
    method: "data/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'application/update', parameters: {name:'hello', file:'./templates/world.yml'}},
    ]
};

