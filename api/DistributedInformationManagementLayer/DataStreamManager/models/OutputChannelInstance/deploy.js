const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy the output channel instance',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: async function (obj, inputs) {
        // inputs contains the obj for the this method.
        let producer = obj.producer;
        console.log("Deploy Output Channel", obj.state);
        if(obj.state !== "Created") {
            console.log("Already starting");
            return;
        }
        // await producer.create();
        try {
            await producer.create();
            obj.producerName = producer._producerName;
            obj.deployed();
            if(obj.queue) {
                while(obj.queue.length > 0) {
                   obj.send(obj.queue.pop());
                }
            }
            return 1;
        }
        catch(e) {
            console.error("Error Creating Producer:", e);
            obj.failed(`Error Creating Producer for channel:${obj.name}, ${e}`);
        }
        return 1;
    }
};
