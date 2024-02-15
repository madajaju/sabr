module.exports = {
    name: 'Monitor Build',
    description: 'Monitor Build is the description',
    method: "build monitor",
    actors: {
        'DevSecOpsManager': 'uses',
    },
    steps: [
        { action: 'build monitor' }
    ]
};

