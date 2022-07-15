module.exports = {
    shortname: 'aml',
    name: 'Application Management Layer',
    description: 'Application Management Layer is responsible for the management of applications and workflows and' +
        'the development, test, deployment and updates of those applications and workloads.',
    color: '#00aaff',
    depends: [ "Distributed Information Management Layer", "Service Management Layer", "Security Aspect", "Identity Aspect" ]
};
