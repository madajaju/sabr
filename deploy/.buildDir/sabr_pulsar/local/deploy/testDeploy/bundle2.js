module.exports = {
    inputs: {
        StreamA: {},
        StreamB: {},
    },
    outputs: {
        StreamC: {},
        StreamD: {}
    },
    transforms: {
        transform1: {
            inputs: [ 'StreamA' ],
            outputs: ['StreamC' ],
            fn: (data, props) => {
                return {payload:data + 'A', properties: props};
            }
        }
    },
}
