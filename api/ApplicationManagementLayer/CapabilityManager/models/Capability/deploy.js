const path = require('path');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a Capability',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.

        let numinstances = obj.instances.length
        let cinstance = new CapabilityInstance({name: obj.name + numinstances});
        obj.addToInstances(cinstance);
        cinstance.deploy();
        return cinstance;
    }
};
