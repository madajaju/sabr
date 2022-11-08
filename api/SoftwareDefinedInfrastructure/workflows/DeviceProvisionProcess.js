module.exports = {
    name: "Device Provision Process",
    description: "Devices are Provisioned in the ecosystem which includes attestation and storage of private keys so" +
        " the device can decrypt SAB Builds that are provisioned to the devices",
    activities: {
        // Each activity should map to a use case, scenario, or another workflow.
        // This is the initial activity in the workflow. Everything starts here
        Init: {
            description: "Initial state for the workflow",
            package: 'SoftwareDefinedInfrastructure', // This could be an actor or package.
            next: {
                "Attest Device Process": { },
            },
        },
        "Attest Device Process": {
            description: "Attest the device to the SABR ecosystem. Make sure the device is trusted and in a good" +
                " well known state.",
            package: "IdentityAspect",
            next: {
                "Provision Edge Security Controller": {
                    condition: {
                        test: "Device is Trusted",
                        value: "Yes",
                    }
                },
                "Reject the Device": {
                    condition: {
                        test: "Device is Trusted",
                        value: "No",
                    }
                }
            }
        },
        "Reject the Device": {
            description: "The device is not trusted and rejected from the SABR Ecosystem.",
            package: "SoftwareDefinedInfrastructure",
        },
        "Provision Edge Security Controller": {
            description: "Provision the Edge Security Controller to the device when the device is attested to the" +
                " SABR ecosystem.",
            package: "SecurityAspect",
            next: {
                "Store SABR Private Keys": { }
            }
        },
        "Store SABR Private Keys": {
            description: "Store the SABR private Keys in a protected area of the Device. These private keys are used" +
                " to decrypt the SAB Build bundles so SABRs can be deployed.",
           packatge: "SecurityAspect",
        }
    }
}
