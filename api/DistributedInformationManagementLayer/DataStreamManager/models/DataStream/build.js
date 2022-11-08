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
            const pair = SecurityKey.generatePair({name: `${obj.name}`});
            obj.encryptionKey = pair.public;
            obj.decryptionKey = pair.private;
            obj.error = false;
        }

        for(let i in obj.channels) {
            let channel = obj.channels[i];
            channel.build();
        }
        obj.built();
    }
};
