const path = require('path');
const {spawn} = require('child_process');

module.exports = {
    friendlyName: 'deploy',
    description: 'Deploy a Service generically.',
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
    // environment.SABR_PROVISION_URL = global.ailtire.config.host + ':' +
    //     global.ailtire.config.port + global.ailtire.config.urlPrefix;
    environment.SABR_PROVISION_URL = global.ailtire.config.host + global.ailtire.config.urlPrefix;
    environment.SABR_SERVICE_ID = instance.id
    console.log("Start:", cmd);
    console.log("Environment:", environment);
    // let instanceID = instance.id;

    let instanceID = spawn(cmd, command, {
        env: environment,
        detached: true,
        // stdio: 'ignore'
    });

    instanceID.on('error', (err) => {
        instance.stderr += "Error on Startup:" + err;
        console.log("Error on startup:", err);
    });
    instanceID.stdout.on('data', (data) => {
        instance.stdout += data;
    });
    instanceID.stderr.on('data', (data) => {
        instance.stderr += data;
    });
    instance.launched({pid: instanceID});
}
