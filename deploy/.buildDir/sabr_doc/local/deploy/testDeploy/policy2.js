module.exports = {
    name: 'realtime',
    transforms: {
        post: (data, props) => {
            return {payload: data, properties: props};
        },
        pre: (data, props) => {
            return {payload:data, properties: props};
        }
    },
}
