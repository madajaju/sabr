/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

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
