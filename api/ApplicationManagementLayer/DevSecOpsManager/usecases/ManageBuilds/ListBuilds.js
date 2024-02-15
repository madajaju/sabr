module.exports = {
    name: 'List Builds',
    description: 'List Builds is the description',
    method: "build list",
    actors: {
        'DevSecOpsManager': 'uses',
    },
    steps: [
        { action: 'build list' },
    ]
};

