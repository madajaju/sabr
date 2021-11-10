module.exports = {
    name: 'Destroy Application',
    description: 'Destroy Application is the description',
    method: "data/create",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'application/destroy', parameters: {name:'hello'}},
    ]
};

