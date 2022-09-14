const path = require('path');

module.exports = {
    friendlyName: 'encryption',
    description: 'Encrypt a the Security Vault',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        let key = "TBD";
        obj.encryptKey = new SecurityKey({name:`${obj.name}-encrypt`, value: key});
        obj.decryptKey = new SecurityKey({name:`${obj.name}-decrypt`, value: key});
    }
};
