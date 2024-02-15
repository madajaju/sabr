module.exports = {
    name: 'Restart Build',
    description: 'Restart Build is the description',
    method: "build restart",
    actors: {
        'DevSecOpsManager': 'uses',
    },
    steps: [
        { action: 'build restart', parameters: {name:'hello1', parameter1: "StateA", parameter2: "StateB"}},
    ]
};

