
class BuildInstance {
    static definition = {
        name: 'BuildInstance',
        description: 'Instance of a build. Another way to think of this is another version of the same build.',
        attributes: {
            version: {
                type: 'string',
                description: 'Version of the Build',
            }
        },
        associations: {
            build: {
                type: 'Build',
                cardinality: 1,
            },
            runs: {
                type: "BuildRun",
                cardinality: 'n',
                owner: true,
                composition: true
            }
        },
    }
}

module.exports = BuildInstance;

