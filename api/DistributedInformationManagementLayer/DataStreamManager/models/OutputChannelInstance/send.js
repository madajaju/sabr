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

    fn: async function (obj, inputs) {
        if(obj.state === 'Enabled') {
            try {
                await obj.producer.sendMessage({payload: inputs.data, properties: inputs.properties});
            }
            catch(e) {
                console.error("Error sending message:", e);
            }
        } else {
            if(!obj.queue) {
                obj.queue = new Array();
            }
            obj.queue.push(inputs);
            console.warn('Cannot send on channel:', obj.name, '. Channel is in the ', obj.state, ' state.')
        }
        return 1;
    }
};
