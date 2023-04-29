module.exports = {
    historical: {
        name: 'historical',
        transforms: {
            post: (data, props) => {
                return {data: data, properties: props};
            },
            pre: (data, props) => {
                return {data: data, properties: props};
            }
        },
    },
    realtime: {
        name: 'realtime',
        transforms: {
            post: (data, props) => {
                return {data: data, properties: props};
            },
            pre: (data, props) => {
                return {data: data, properties: props};
            }
        },
    },
    summary: {
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
}
