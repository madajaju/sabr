module.exports = {
    name: 'Cancel Build',
    description: 'Cancel Build is the description',
    method: "build/cancel",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'build create', parameters: {name:'hello', file:'./templates/build.yml'}},
        { action: 'build cancel', parameters: {name:'hello'}},
    ]
};

