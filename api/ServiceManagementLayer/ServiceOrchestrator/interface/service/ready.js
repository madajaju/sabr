const path = require('path');
const {spawn} = require('child_process');

module.exports = {
    friendlyName: 'ready',
    description: 'Service is ready',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        service: {
            description: 'ID of the Service that is ready',
            type: 'string', // string|boolean|number|json
            required: true,
        },
        url: {
            description: 'URL or streamID of the service that is ready',
            type: 'string',
            required: false
        },
    },

    exits: {},

    fn: (inputs, env) => {
        let serviceid = inputs.service;
        let url = inputs.url;
        let service = Service.find(serviceid);
        AEvent.addServers([{url:inputs.url, pattern:'*'}]);
        service.ready();

        return;
    }
};
