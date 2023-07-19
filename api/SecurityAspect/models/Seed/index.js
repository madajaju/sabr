class Seed {
    static definition = {
        name: 'Seed',
        description: 'Seed for the SecureVault. It is created at the build of the SABR and the SecureVault. The seed is used to uniquely register and provision the SABR to the SecurityManager.',
        attributes: {},
        associations: {
            registrationCreds: {
                type: 'Credential',
                cardinality: 1,
                composition: true,
                owner: true,
            },
            bootstrap: {
                type: "SecurityKey",
                cardinality: 1,
                composition: true,
                owner: true,
            },
            uauth: {
                type: "SecurityKey",
                cardinality: 1,
                composition: true,
                owner: true,
            }
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

module.exports = Seed;

