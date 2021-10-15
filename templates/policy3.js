module.exports = {
    name: 'summary',
    transforms: {
        post: (data, props) => {
            return {data: data, properties: props};
        },
        pre: (data, props) => {
            return {data: data, properties: props};
        }
    },
}
