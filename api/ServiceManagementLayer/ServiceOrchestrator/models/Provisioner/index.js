
class Provisioner {
    static definition = {
        name: 'Provisioner',
        description: 'Abstract Provisioner Class used to develop an interface for the different provisioners.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the provisioner',
            },
            config: {
                type: 'json',
                description: 'Configuration for the provisioner.'
            }
        },
        associations: {
            services: {
                type: 'ServiceInstance',
                cardinality: 'n',
                composition: false,
                owner: false,
            },

        },
        /*
        statenet: {
            Init: {
                description: "Initial State"
                events: {
                    create: {
                        StateName: { }
                    }
                }
            },
            StateName: {
                description: "My Description of the state",
                events: {
                    eventName: {
                        StateName: {
                            condition: function(obj) { ... },
                            action: function(obj) { ... },
                        }
                    },
                    eventName2 ...
                }
                actions: {
                    entry: { entry1: function(obj) { ... } },
                    exit: { exit1: function(obj): { ... } }
                }
            }
        }
        */
    }
}

module.exports = Provisioner;

