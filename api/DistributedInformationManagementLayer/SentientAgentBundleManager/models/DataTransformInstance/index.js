
class DataTransformInstance {
    static definition = {
        name: 'DataTransformInstance',
        description: 'This represents an instance of a data transformation running in the system.',
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
    }
}

module.exports = DataTransformInstance;

