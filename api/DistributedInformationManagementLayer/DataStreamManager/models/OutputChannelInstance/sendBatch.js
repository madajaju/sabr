const path = require('path');

module.exports = {
    friendlyName: 'sendBatch',
    description: 'Send data to the Data Stream Instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        data: {
            description: 'Data to send to the data stream',
            type: 'json', // string|boolean|number|json
            required: true,
        },
    },

    exits: {},

    fn: async function (obj, inputs) {
        if(!inputs.data) { return 1; }
        if(obj.state === 'Enabled') {
            try {
                await obj.producer.sendBatch(inputs.data);
            }
            catch(e) {
                console.error("Error sending message:", e);
            }
         } else {
            if(!obj.queue) {
                obj.queue = new Array();
            }
	    for(let i in inputs.data) {
		    obj.queue.push(inputs.data[i]);
            }
            console.warn('Cannot send on channel:', obj.name, '. Channel is in the ', obj.state, ' state.')
        }

        return 1;
    }
};
