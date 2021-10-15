const path = require('path');

module.exports = {
    friendlyName: 'failed',
    description: 'Deployment Failed on the Data Channel Instance.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        message: {
            description: 'Failed Message for the deployment error.',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        obj.message = inputs.message;
        return obj;
    }

};
