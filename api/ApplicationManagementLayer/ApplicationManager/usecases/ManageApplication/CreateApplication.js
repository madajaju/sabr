module.exports = {
    name: 'Create Application',
    description: 'Create Application is the description',
    method: "data/create",
    actors: {
        'SoftwareDeveloper': 'uses',
    },
    steps: [
        { action: 'application/create', parameters: {name:'hello', file:'./templates/application.yml'}},
    ]
};

