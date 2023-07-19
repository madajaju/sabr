
class WorkingEnclave {
    static definition = {
        name: 'WorkingEnclave',
        description: 'This is the working enclave of the SecureVault. This contains all of the temporary objects and strings required to get keys from the SecurityManager',
        attributes: {
            deviceUID: {
                type: 'string',
                description: "This is the unique ID of the SecureVault's SABR",
            },
        },
        associations: {
            token: {
                type: 'JWT',
                cardinality: 1,
                composition: false,
                owner: false,
            },
            authenticationKey: {
                type: "SecurityKey",
                cardinality: 1,
                composition: false,
                owner: false
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

module.exports = WorkingEnclave;

