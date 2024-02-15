

/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

const path = require('path');
const process = require("process");
const bent = require('bent');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a CapabilityInstance',
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
