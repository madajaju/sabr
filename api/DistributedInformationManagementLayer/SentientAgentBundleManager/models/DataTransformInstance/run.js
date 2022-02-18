const path = require('path');

module.exports = {
    friendlyName: 'run',
    description: 'Run the transform on the data and update the properties.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Policies to use for deploying the Bundle.',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'StreamPolicy',
            cardinality: 'n'
        },
        properties: {
            description: 'Metadata for the data. Contains the heritage of the data.',
            type: 'json',
            required: true,
        }
    },

    exits: {},

    fn: function (obj, inputs) {
        if(!inputs.properties.hasOwnProperty('heritage')) {
            inputs.properties.heritage = [];
        }
        let hData = {date: new Date(), transform: obj.name, input: inputs.data};
        inputs.properties.heritage.push(hData);
        let output = obj.fn(inputs.data, inputs.properties);
        for(let i in obj.outputs) {
            let outStream = obj.outputs[i];
            outStream.send(output);
        }
        return true;
    }
};
