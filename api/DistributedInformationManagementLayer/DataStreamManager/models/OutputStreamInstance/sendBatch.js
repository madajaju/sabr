const path = require('path');

module.exports = {
    friendlyName: 'sendBatch',
    description: 'SendBatch data to the Data Stream Instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Data to send to the data stream',
            type: 'json', // string|boolean|number|json
            required: true,
        },
    },
    exits: {},
    fn: function (obj, inputs) {
        let messages = [];
        for(let i in inputs.data) {
            let message = inputs.data[i];
            let payload = JSON.stringify(message.payload);
            let myProps = {};
            for(let pname in message.properties) {
                let prop =message.properties[pname];
                let proptype = typeof prop;
                if(proptype === 'Number' || proptype === 'String' || proptype === 'Boolean' || proptype === 'BigInt') {
                    myProps[pname] = prop;
                } else {
                    // .JSON tells the InputStreamInstance, (the other side) how to handle the string.
                    myProps[pname +'.JSON'] = JSON.stringify(prop);
                }
            }
            messages.push({payload:payload, properties:myProps});
        }
        for(let i in obj.channels) {
            let channel = obj.channels[i];
            channel.sendBatch({data:{messages:messages}});
        }
        return obj; 
    }
};         
