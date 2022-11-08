module.exports = {
    name: 'sabr1',
    outputs: {
        StreamA: {},
        StreamB: {}
    },
    transforms: {
        mainTransform: {
            inputs: [],
            outputs: ['StreamA', 'StreamB'],
            fn: (data, props) => {
                return {data: {message: "Hello World-" + data.message}, properties: props};
            }
        }
    },
    applications: {
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
    },
    images: {
        sabr_ziplookup: {
            dir: './city',
            file: './city/Dockerfile',
            tag: 'sabr_ziplookup',
            env: {}
        },
        sabr_citylookup: {
            dir: './zip',
            file: './zip/Dockerfile',
            tag: 'sabr_citylookup',
            env: {}
        },
        sabr_service: {}
    },
    services: {
        sabr_zipcodeLookup: {
            image: "sabr_ziplookup",
            volumes: {
                lookupTable: {source: "./data", target: "/usr/src/app/data"}
            },
            interface: {
                "/zip": {path: '/zip', port: 3002, protocol: "http"},
            },
            policies: {},
        },
        sabr_citylookup: {
            image: "sabr_cityLookup",
            volumes: {
                lookupTable: {source: "./data", target: "/usr/src/app/data"}
            },
            interface: {
                "/city": {path: '/city', port: 3001, protocol: "http"},
            },
            policies: {},
        },
    }
}
