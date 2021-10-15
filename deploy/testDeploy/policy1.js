module.exports = {
    name: 'historical',
    transforms: {
        post: (data, props) => {
            return {payload: data, properties: props};
        },
        pre: (data, props) => {
            return {payload:data, properties: props};
        }
    },
}
