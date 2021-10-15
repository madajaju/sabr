let summaryItems = 1;
module.exports = {
    inputs: {
        StreamA: {
            transform: (data) => {
                return data + 'A';
            },
            output: 'StreamC'
        },
        StreamB: {
            transform: (data) => {
                return data + 'B';
            },
            output: 'StreamD'
        }
    },
    outputs: {
        StreamC: {},
        StreamD: {}
    }
}
