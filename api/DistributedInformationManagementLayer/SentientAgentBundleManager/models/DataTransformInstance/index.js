
class DataTransformInstance {
    static definition = {
        name: 'DataTransformInstance',
        description: 'Description ' +
            'long description',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the transformation',
            },
            version: {
                type: 'string',
                description: 'Version of the transformation',
            },
            fn: {
                type: 'json',
                description: 'Function to run. This should have two parameters. (data,channel)'
            }
        },
        associations: {
            inputs: {
                description: 'Inputs of the transformation.',
                type: 'InputStreamInstance',
                cardinality: 'n',
            },
            outputs: {
                description: 'Outputs of the transformation.',
                type: 'OutputStreamInstance',
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

module.exports = DataTransformInstance;

