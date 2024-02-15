
class Build {
    static definition = {
        name: 'Build',
        description: 'This represents a build in the environment.',
        attributes: {
            name: {
                type: 'string',
                description: 'Name of the build',
            }
        },
        associations: {
            versions: {
                type: 'BuildInstance',
                cardinality: 'n',
                composition: true,
                owner: true,
            },
        },
    }
}

module.exports = Build;

