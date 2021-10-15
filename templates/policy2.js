module.exports = {
    name: 'realtime',
    transforms: {
        post: (data, props) => {
            return {data: data, properties: props};
        },
        pre: (data, props) => {
            return {data:data, properties: props};
        }
    },
}
