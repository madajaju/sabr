module.exports = {
    name: "Attest SABR to Device",
    description: "Attest SABR to Device description needs to be completed.",
    activities: {
        // Each activity should map to a use case, scenario, or another workflow.
        // This is the initial activity in the workflow. Everything starts here
        Init: {
            description: "Initial state for the workflow",
            actor: 'ITOperations', // This could be an actor or package.
            next: {
                "Attested Hardware": {},
                "Start Build": {}
            },
        },
        "Attested Hardware": {
            description: "Hardware attestation tags are created and stored in hardware protected memory TPM, SGX," +
                " or TDX",
            package: "Common Physical Layer",
            next: {
                "Generate Hardware Keys": {}
            }
        },
        "Generate Hardware Keys": {
            description: "Generate attestation key for the hardware.",
            package: "Security Aspect",
            next: {
                "Deploy Attested Hardware": {}
            }
        },
        "Deploy Attested Hardware": {
            description: "Deploy the attested hardware",
            package: "Common Physical Layer",
            next: {
                "Deploy Capability Release": {},
            }
        },
        "Start Build": {
            description: "Build capability to be deployed to the hardware.",
            actor: "DevOps Engineer",
            next: {
                "Build Capability": {}
            }
        },
        "Build Capability": {
            description: "Build capability to be deployed to the hardware.",
            package: "Capability Manager",
            next: {
                "Generate Attestation Keys": {}
            }
        },
        "Generate Attestation Keys": {
            description: "The attestation of the capability is tied to specific hardware tags of attested hardware",
            package: "Security Aspect",
            next: {
                "Provision Capability": {}
            }
        },
        "Provision Capability": {
            description: "Build capability to be deployed to the hardware.",
            package: "Capability Manager",
            next: {
                "Attest Capability": {}
            }
        },
        "Attest Capability": {
            description: "Attest Capability before the deploy",
            package: "Capability Manager",
            next: {
                "Deploy Capability Release": {
                    condition: {
                        test: "Attestation match",
                        value: "true"
                    }
                },
                "Failed Deployment": {
                    condition: {
                        test: "Attestation match",
                        value: "false"
                    }
                }
            }
        },
        "Deploy Capability Release": {
            description: "The Attested Capability is deployed on the hardware its SABRs have been attested.",
            package: "Capability Manager"
        },
        "Failed Deployment": {
            description: "The Capability could not be deployed because there were no devices attested.",
            package: "Capability Manager"
        }
    }
}
