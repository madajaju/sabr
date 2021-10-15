
class DataTransform {
    static definition = {
        name: 'DataTransform',
        description: 'Data Transformation taking inputs and producing to outputs.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the transformation',
            },
            fn: {
                type: 'json',
                description: 'Function to run. This should have two parameters. (data,channel)'
            }
        },
        associations: {
            inputs: {
                description: 'Inputs of the transformation.',
                type: 'DataStream',
                cardinality: 'n',
            },
            outputs: {
                description: 'Outputs of the transformation.',
                type: 'DataStream',
                cardinality: 'n',
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

module.exports = DataTransform;

