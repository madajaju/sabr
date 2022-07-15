module.exports = {
    description: "Capability to transform data from one things to another.",
    bundles: {
        mySabr1: {
            requirements: {},
            policies: {},
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
                    for (let i = 0; i < 100; i++) {
                        for (let oname in bundle.outputs) {
                            let output = bundle.outputs[oname];
                            output.send({data: {message: "I am here"}, properties: {parent: 'Generated'}});
                        }
                    }
                }
            }
        },
        mySabr2: {
            inputs: {
                StreamA: {},
                StreamB: {},
            },
            outputs: {
                StreamC: {},
                StreamD: {}
            },
            transforms: {
                transform1: {
                    inputs: [ 'StreamA' ],
                    outputs: ['StreamC' ],
                    fn: (data, props) => {
                        return {data:{message:`${data.message}A`}, properties: props};
                    }
                },
                transform2: {
                    inputs: [ 'StreamB' ],
                    outputs: ['StreamD' ],
                    fn: (data, props) => {
                        return {data:{message:`${data.message}B`}, properties: props};
                    }
                }
            },
        },
        mySabr3: {
            inputs: {
                StreamC: {},
                StreamD: {},
            },
            outputs: {
                StreamE: {}
            },
            transforms: {
                transformCD: {
                    inputs: [ 'StreamC', 'StreamD'],
                    outputs: [ 'StreamE' ],
                    fn: (data, props) => {
                        return {data:{message:`${data.message}CD`}, properties: props};
                    }
                }
            },
            outputs: {
                StreamE: {},
            },
        },
        mySabr4: {
            inputs: {
                StreamE: {},
            },
            outputs: {},
            transforms: {
                transform4: {
                    inputs: ['StreamE'],
                    outputs: [],
                    fn: (data, props) => {
                        console.log("Data:", data.message, "Props:", props);
                        return {data:{message:`${data.message}Done`}, properties: props};
                    },
                }
            },
        },
        mySabr5: {
            inputs: {
                StreamA: {},
            },
            outputs: {
                StreamC: {},
            },
            transforms: {
                transform4: {
                    inputs: ['StreamA'],
                    outputs: [],
                    fn: (data, props) => {
                        console.log("Data:", data.message, "Props:", props);
                        return {data:{message:`${data.message}5`}, properties: props};
                    },
                }
            },
        },
        mySabr6: {
            inputs: {
                StreamC: {},
            },
            outputs: {
                StreamD: {},
            },
            transforms: {
                transform4: {
                    inputs: ['StreamC'],
                    outputs: [],
                    fn: (data, props) => {
                        console.log("Data:", data.message, "Props:", props);
                        return {data:{message:`${data.message}6`}, properties: props};
                    },
                }
            },
        },
        mySabr7: {
            inputs: {
                StreamB: {},
            },
            outputs: {
                StreamE: {},
            },
            transforms: {
                transform4: {
                    inputs: ['StreamB'],
                    outputs: [],
                    fn: (data, props) => {
                        console.log("Data:", data.message, "Props:", props);
                        return {data:{message:`${data.message}7`}, properties: props};
                    },
                }
            },
        }
    },
    policies: {
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
};
