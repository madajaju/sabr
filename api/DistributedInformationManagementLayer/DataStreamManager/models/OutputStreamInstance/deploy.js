const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a Data Stream Instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        policies: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'StreamPolicy',
            cardinality: 'n'
        },
    },

    exits: {},

    fn: async function (obj, inputs) {
        // inputs contains the obj for this method.
        let tasks = [];
        for(let i in obj.channels) {
            let task = obj.channels[i].deploy();
            tasks.push(task);
        }
        await Promise.all(tasks);
        return;
    }
};
