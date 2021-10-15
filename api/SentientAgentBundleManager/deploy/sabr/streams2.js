let summaryItems = 1;
module.exports = {
    outputs: {
        StreamA: {},
        StreamB: {}
    },
    source: {
        generator: (index) => {
            return "Hello World-" + index;
        }
    }
}
