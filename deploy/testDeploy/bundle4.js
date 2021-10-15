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
                console.log("Data:", data);
                console.log("Properties:", props);
                return {payload: data + '-Done', properties:props};
            },
        }
    },
}
