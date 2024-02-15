
class BuildLog {
    static definition = {
        name: 'BuildLog',
        description: 'Log from running the build',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the log',
            },
            output: {
                type: 'string',
                description: "Output of the log."
            }
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

module.exports = BuildLog;

