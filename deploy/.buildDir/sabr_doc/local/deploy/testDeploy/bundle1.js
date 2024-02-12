module.exports = {
    outputs: {
        StreamA: { },
        StreamB: { }
    },
    transforms: {
        mainTransform: {
            inputs: [],
            outputs: ['StreamA', 'StreamB'],
            fn: (data, props) => {
                return "Hello World-" + data;
                return {payload: "Hello World-" + data, properties: props};
            }
        }
    },
    applications: {
        myApp: (bundle) => {
            for(let i=0; i < 10; i++) {
                for(let oname in bundle.outputs) {
                    let output = bundle.outputs[oname];
                    output.send({data:"I am here", properties: {parent:'Generated'}});
                }
            }
        }
    }
}
