
module.exports = {
    web: {
        dir: 'web',
        cmd: 'node web/server.js',
        file: 'Dockerfile',
        tag: 'sabr_diml_sabm_web',
        env: {
        }
    },
    sabr_service: {
        dir: 'sabr',
        cmd: 'node server.js',
        file: 'Dockerfile',
        tag: 'sabr_service',
	packages: [ "DistributedInformationManagementLayer", "ServiceManagementLayer", "ApplicationManagementLayer" ],
        env: {

        }
    },
    sabr_registry: {
        dir: 'registry',
        cmd: 'registry',
        file: 'Dockerfile',
        tag: 'sabr_registry',
        env: {

        }
    },
    sabr_builder: {
        dir: 'builder',
        cmd: 'entrypoint.sh',
        file: 'Dockerfile',
        tag: 'sabr_builder',
        env: {

        }

    }
}
