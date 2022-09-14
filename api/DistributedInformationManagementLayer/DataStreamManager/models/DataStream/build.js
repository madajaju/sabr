const path = require('path');

module.exports = {
    friendlyName: 'build',
    description: 'Build a Data Stream, generates the security keys for the data stream.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for this method.
        // Check the state to see if the keys need to be re-generated.
        if(obj.encryptionKey === null) {
            let key = "TBD"; // This is where the keys are generated and stored.
            obj.encryptionKey = new SecurityKey({name: `${obj.name}.encrypt`, value: key});
            obj.decryptionKey = new SecurityKey({name: `${obj.name}.decrypt`, value: key});
            obj.error = false;
            obj.built();
        }
    }
};
