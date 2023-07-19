module.exports = {
    myApp: (bundle) => {
        for (let i = 0; i < 10; i++) {
            for (let oname in bundle.outputs) {
                let output = bundle.outputs[oname];
                if (output) {
                    output.send({data: {message: "Bundle1 created"}, properties: {parent: 'App Generated'}});
                }
            }
        }
    }
}
