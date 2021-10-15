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
                return {data:{message:`${data.message}A`}, properties: props};
            }
        },
        transform2: {
            inputs: [ 'StreamB' ],
            outputs: ['StreamD' ],
            fn: (data, props) => {
                return {data:{message:`${data.message}B`}, properties: props};
            }
        }
    },
}
