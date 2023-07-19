
class EncryptedVault {
    static definition = {
        name: 'EncryptedVault',
        description: "This is the encrypted part of the SecureVault and contains DataStreamIDs used to create unique mixed encryption and decryption keys.",
        attributes: {
            encryptedDate: {
                description: 'Data Encrypted with all of the secrets and keys',
                type: 'string',
            }
        },
        associations: {
            streams: {
                type: 'SecurityKey',
                cardinality: 'n',
                composition: true,
                owner: true,
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

module.exports = EncryptedVault;

