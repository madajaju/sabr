module.exports = {
    name: 'Create Application',
    description: 'Application developers create application that can be deployed in the ecosystem. This is created' +
        ' in the traditional DevSecOps pipeline.',
    method: "application/create",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'application/create', parameters: {name:'hello', file:'./templates/application.yml'}},
    ]
};
