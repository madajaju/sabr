module.exports = {
    name: 'summary',
    transforms: {
        post: (data, props) => {
            return {payload: data, properties: props};
        },
        pre: (data, props) => {
            return {payload: data, properties: props};
        }
    },
}
