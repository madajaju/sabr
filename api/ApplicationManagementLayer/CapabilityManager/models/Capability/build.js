const path = require('path');

module.exports = {
    friendlyName: 'build',
    description: 'Build a Capability',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: 'name of the build',
            type: 'string', // string|boolean|number|json
            required: true
        },
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        let name = inputs.name || `${obj.name}-build`;
        // iterate through the SABMs and build them.
        for(let bname in obj.bundles) {
            let bundle = obj.bundles[bname];
            bundle.build({name:name});
        }
        obj.results = true;
        obj.built();
        return obj;
    }
};
