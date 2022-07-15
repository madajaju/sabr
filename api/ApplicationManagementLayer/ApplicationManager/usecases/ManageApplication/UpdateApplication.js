module.exports = {
    name: 'Update Application',
    description: 'A DevSecOps engineer utilizes the DevSecOps pipeline to update an application that has been' +
        ' deployed in the ecosystem. There are several updating models that can be utilized to update the' +
        ' application, including staggered updates, and blue-green updates.',
    method: "application/update",
    actors: {
        'DevOpsEngineer': 'uses',
    },
    steps: [
        { action: 'application/update', parameters: {name:'hello', file:'./templates/world.yml'}},
    ]
};

