const path = require('path');

module.exports = {
    friendlyName: 'send',
    description: 'Send data to the Data Stream Instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Data to send to the data stream',
            type: 'json', // string|boolean|number|json
            required: true,
        },
        properties: {
            description: 'Properties of the data being sent.',
            type: 'json', // string|boolean|number|json
            required: true,
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        // Iterate over the parent stream and create instance channels.
        inputs.data = JSON.stringify(inputs.data);
        let myProps = {};
        for(let pname in inputs.properties) {
            let prop = inputs.properties[pname];
            let proptype = typeof prop;
            if(proptype === 'Number' || proptype === 'String' || proptype === 'Boolean' || proptype === 'BigInt') {
                myProps[pname] = prop;
            } else {
                // .JSON tells the InputStreamInstance, (the other side) how to handle the string.
                myProps[pname +'.JSON'] = JSON.stringify(prop);
            }
        }
        inputs.properties = myProps;
        for(let i in obj.channels) {
            let channel = obj.channels[i];
            channel.send(inputs);
        }
        return obj;
    }
};
