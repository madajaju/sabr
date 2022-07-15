const path = require('path');

module.exports = {
    friendlyName: 'provision',
    description: 'Provision the service with the provision script.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: async (obj, inputs) => {

        let provisionScript = obj.parent.provisionScript;
        try {
            let response = await provisionScript(obj);
            if(response) {
                obj.provisioned();
            }
        }
        catch(e){
            console.error("Provision failed:", e);
            obj.failed();
        }
        return obj;

    }
};
