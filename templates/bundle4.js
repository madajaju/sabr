module.exports = {
    inputs: {
        StreamE: {},
    },
    outputs: {},
    transforms: {
        transform4: {
            inputs: ['StreamE'],
            outputs: [],
            fn: (data, props) => {
                console.log("Data:", data.message, "Props:", props);
                return {data:{message:`${data.message}Done`}, properties: props};
            },
        }
    },
}
