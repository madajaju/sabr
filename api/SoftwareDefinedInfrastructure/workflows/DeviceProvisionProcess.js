

/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

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
