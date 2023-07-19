/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

const path = require('path');
const {spawn} = require('child_process');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a Service using docker',
    static: false, // True is for Class methods. False is for object based.
    inputs: {
        services: {
            description: 'Service to deploy',
            type: 'ref', // string|boolean|number|json
            required: true,
            model: 'Service',
            cardinality: 'n'
        },
    },

    exits: {},

    fn: (obj, inputs) => {
        // For each Stream in the Bundle create a streaminstance.
        // Pass the policies to the stream so appropriate channels are created.
        // Create a SABundleInstance with all of the StreamInstances attached.
        let numi = obj.services.length;
        for (let i in inputs.services) {
            let service = inputs.services[i];

            let instance = new ServiceInstance({
                name: `service.name${numi + i}`,
                environment: service.environment,
                command: service.command
            });
            obj.addToServices(instance);
            service.addToInstances(instance);
            startService(instance);
        }
        return;
    }
};

function startService(instance) {
    let command = instance.command.split(/\s/);
    let environment = instance.environment;
    //let instanceID = spawn("node", ['index.js'], {
    let cmd = command.shift();
    // Inject the Provisioner Host ID and port to communicate back to.
    environment.SABR_PROVISION_URL = global.ailtire.config.host + ':' +
        global.ailtire.config.port + global.ailtire.config.urlPrefix;
    environment.SABR_SERVICE_ID = instance.id;
    environment.SABR_NAME = instance.name;

    let instanceID = spawn('docker', ['run', 'sabr-service'], {
        env: environment,
        detached: true,
        stdio: 'ignore'
    });
    instanceID.on('error', (err) => {
        console.error("Error with spawn:", err);
    });
    instance.launched({pid: instanceID});
}
