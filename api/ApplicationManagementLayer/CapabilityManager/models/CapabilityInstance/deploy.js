const path = require('path');
const process = require("process");
const bent = require('bent');

module.exports = {
    friendlyName: 'create',
    description: 'Create a Capability',
    static: false, // True is for Class methods. False is for object based.
    inputs: {},

    exits: {},

    fn: function (obj, inputs) {
        // inputs contains the obj for the this method.
        let owner = obj.owner;
        obj.provisioner = new ProcessProvisioner();
        // Iterate over all of the bundles in the capability and deploy them.
        let port = 3001;
        let sabrfile = './templates/sabr1.js';
        let policiesfile = './templates/policies.js';
        let services = [];
        for (let i in owner.bundles) {
            let bundle = owner.bundles[i];
            bundle.deploying();
            let environment = {
                SABR_DEF: sabrfile,
                SABR_NAME: bundle.name,
                SABR_POLICIES: policiesfile,
                AILTIRE_PORT: port++
            };
            let command = "node index.js";
            let service = new Service({
                name: bundle.name,
                command: command,
                environment: environment,
                port: port,
                provisionScript: async (instance) => {
                    let url = 'http://' + instance.url;
                    let params = `/diml/sabm/bundle/createAndDeploy`
                    let args = {
                        name: bundle.name,
                        file: bundle.toJScript(),
                        policies: policiesToJScript(owner.policies),
                    }
                    try {
                        const post = bent(url, 'POST', 'json', 200);
                        const response = await post(params, args);
                        console.log(response.results);
                        return response;
                    }
                    catch(e){
                        console.error("Provision Failed:", e);
                        throw new Error("Provision Failed:"+ e.message);
                    }
                }
            });
            services.push(service);
            // let binstance = bundle.deploy({policies: owner.policies});
            // obj.addToBundles(binstance);
        }
        obj.provisioner.deploy({services: services});
        return obj;
    }
};

function policiesToJScript(policies) {
    let retval = 'module.exports = {';
    for(let i in policies) {
        let policy = policies[i];
        retval += `${policy.name}: { name: '${policy.name}', `;
        retval += `transforms: { `;
        if(policy.post) {
            retval += 'post:' + policy.post.fn.toString() + ',';
        }
        if(policy.pre) {
            retval += 'pre:' + policy.pre.fn.toString() + ',';
        }
        retval += '} },';
    }
    retval += '}';
    return retval;
}
