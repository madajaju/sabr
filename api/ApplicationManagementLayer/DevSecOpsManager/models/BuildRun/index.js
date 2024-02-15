
class BuildRun {
    static definition = {
        name: 'BuildRun',
        description: 'This is a run for the build specified. It contains the logs and the results of running the' +
            ' build.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the build',
            },
            startTime: {
                type: 'date',
                description: "Start of the build run",
            },
            endTime: {
                type: 'date',
                description: "Time the build finished",
            }
        },
        associations: {
            build: {
                type: 'BuildInstance',
                cardinality: 1,
                composition: false,
            },
            logs: {
                type: "BuildLog",
                cardinality: 'n',
                composition: true,
                owner: true
            }
        },
        statenet: {
            Init: {
                description: "Initial State",
                events: {
                    create: {
                        Scheduled: {}
                    }
                }
            },
            Scheduled: {
                description: "Build Run Scheduled to start",
                events: {
                    run: {
                        Running: {}
                    }
                }
            },
            Running: {
                description: "The Build is running",
                events: {
                    finished: {
                        Completed: {}
                    },
                    cancel: {
                        Cancelled: {},
                    },
                    failed: {
                        Failed: {},
                    }
                }
            },
            Completed: {
                description: "The Build Run is completed successfully",
            },
            Cancelled: {
                description: "The Build Run was cancelled",
            },
            Failed: {
                description: "The Build Run failed to complete",
            },
        }
    }
}

module.exports = BuildRun;

