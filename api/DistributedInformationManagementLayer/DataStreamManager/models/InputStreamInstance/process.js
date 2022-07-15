const path = require('path');

module.exports = {
    friendlyName: 'process',
    description: 'Process data on the stream',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Data to process.',
            type: 'json', // string|boolean|number|json
            required: true,
        },
        properties: {
            description: 'Properties of the data',
            type: 'json',
            required: true
        },
        channel: {
            description: 'Channel the data came on',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'InputChannelInstance',
            cardinality: 1
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // Need to add logic around which channel the data has come from.
        // Or maybe to go get the data.

        // Convert from string to json.
        // Look at all of the properties and convert them to objects if they have the .JSON Tag.
        let myProps = {};
        for(let pname in inputs.properties) {
            if(pname.match(/\.JSON$/)) {
                let nname = pname.replace(/\.JSON$/, '');
                myProps[nname] = JSON.parse(inputs.properties[pname]);
            } else {
                myProps[pname] = inputs.properties[pname];
            }
        }
        inputs.properties = myProps;
        // inputs.properties = JSON.parse(inputs.properties);
        inputs.data = JSON.parse(inputs.data);
        for(let tname in obj.transforms) {
            let trans = obj.transforms[tname];
            trans.run({data:inputs.data, properties: inputs.properties});
        }
        return obj;
    }
};
