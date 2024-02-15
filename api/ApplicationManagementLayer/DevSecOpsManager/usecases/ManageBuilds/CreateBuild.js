module.exports = {
    name: 'Create Build',
    description: 'Create Build is the description',
    method: "build create",
    actors: {
        'DevSecOpsManager': 'uses',
    },
    steps: [
        { action: 'build create', parameters: {name:'hello', file:'./templates/build.yml'}},
    ]
};

