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
                return {data:{message:`${data.message}CD`}, properties: props};
            }
        }
    },
    outputs: {
        StreamE: {},
    },
}
