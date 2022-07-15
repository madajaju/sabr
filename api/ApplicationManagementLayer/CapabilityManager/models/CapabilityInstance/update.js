const path = require('path');
const process = require("process");
const bent = require('bent');

module.exports = {
    friendlyName: 'update',
    description: 'Update a CapabilityInstance that is running in the ecosystem including all of the SABRs controlled' +
        ' by the capability.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        definition: {
            description: 'Definition of the Capability that is being updated.',
            type: 'json', // string|boolean|number|json
            required: true
        },
    },
    exits: {},

    fn: function (obj, inputs) {
        // This function should send a kill signal to the running capability instance.
        // This in turn should kill all of the SABRs controlled by the capability.
        let owner = obj.owner;

        // Iterate over all the bundles in the capability and deploy them.
        for(let i in obj.bundles) {
            let bundle = obj.bundles[i];
            bundle.kill({signal:signal});
        }
        return obj;
    }
};
