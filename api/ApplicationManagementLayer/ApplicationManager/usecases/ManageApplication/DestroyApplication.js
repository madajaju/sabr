module.exports = {
    name: 'Destroy Application',
    description: 'DevOps engineer can decommission applications in the ecosystem by destroying applications in the' +
        ' ecosystem.',
    method: "application/destroy",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'application/destroy', parameters: {name:'hello'}},
    ]
};

