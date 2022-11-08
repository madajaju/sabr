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
                return {data: {message:"Hello World-" + data.message}, properties: props};
            }
        }
    },
    applications: {
        myApp: (bundle) => {
            for(let i=0; i < 10; i++) {
                for(let oname in bundle.outputs) {
                    let output = bundle.outputs[oname];
                    if(output) {
                        output.send({data: {message: "Bundle1 created"}, properties: {parent: 'App Generated'}});
                    }
                }
            }
        }
    }
}
