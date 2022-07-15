
class DockerProvisioner {
    static definition = {
        name: 'DockerProvisioner',
        description: 'The DockerProvisioner uses Docker to provision services in the system. This is a' +
            ' specialization in the system so different provisioners can be used. In this case the docker swarm' +
            ' engine is used to provision services.',
        extends: 'Provisioner',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the docker provisioner',
            }
        },
        associations: {
        },
    }
}

module.exports = DockerProvisioner;

