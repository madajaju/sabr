const path = require('path');

module.exports = {
    friendlyName: 'launched',
    description: 'Notification that the Service Instance was launched',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        pid: {
            description: 'Process id of the service instance',
            type: 'string', // string|boolean|number|json
        },
    },

    exits: {},

    fn: (obj, inputs) => {
        // For each Stream in the Bundle create a streaminstance.
        // Pass the policies to the stream so appropriate channels are created.
        // Create a SABundleInstance with all of the StreamInstances attached.
        obj.pid = inputs.pid;
        return obj;
    }
};
