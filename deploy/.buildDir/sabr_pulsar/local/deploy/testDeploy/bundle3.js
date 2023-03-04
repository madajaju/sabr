module.exports = {
    inputs: {
        StreamC: {},
        StreamD: {},
    },
    outputs: {
        StreamE: {}
    },
    transforms: {
        transformCD: {
            inputs: [ 'StreamC', 'StreamD'],
            outputs: [ 'StreamE' ],
            fn: (data, props) => {
                return {payload: data, properties: props};
            }
        }
    },
    outputs: {
        StreamE: {},
    },
}
