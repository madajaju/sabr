let summaryItems = 1;
module.exports = {
    inputs: {
        StreamC: {
            transform: (data) => {
                return data + 'C';
            },
            output: 'StreamE'
        },
        StreamD: {
            transform: (data) => {
                return data + 'D';
            },
            output: 'StreamE'
        }
    },
    outputs: {
        StreamE: {},
    },
}
