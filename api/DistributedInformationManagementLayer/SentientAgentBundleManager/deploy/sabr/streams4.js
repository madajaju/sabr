let summaryItems = 1;
module.exports = {
    inputs: {
        StreamE: {
            transform: (data) => {
                return data + '-Done';
            },
        },
    },
}
