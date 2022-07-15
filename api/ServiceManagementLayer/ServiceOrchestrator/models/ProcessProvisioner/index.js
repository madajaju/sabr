
class ProcessProvisioner {
    static definition = {
        name: 'ProcessProvisioner',
        description: 'Provisions services as spawned processes. This is a specailization of the Provisioner abstract' +
            ' class. It focuses on running a service on the same machine as the provisioner using a spawned process.' ,
        extends: 'Provisioner',
        attributes: {
        },
        associations: {
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

module.exports = ProcessProvisioner;

