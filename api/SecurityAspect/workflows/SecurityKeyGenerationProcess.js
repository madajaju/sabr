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
    name: "Security Key Generation Process",
    description: "Generate Security Key generation pairs and store the public key in the security store and" +
        " distribute them to all of the targeted devices. The private key is stored in a secure vault as well.",
    activities: {
        // Each activity should map to a use case, scenario, or another workflow.
        // This is the initial activity in the workflow. Everything starts here
        Init: {
            description: "Initial state for the workflow",
            actor: 'SecurityAspect', // This could be an actor or package.
            next: {
                "Generate RSA Key Pair": {},
            }
        },
        "Generate RSA Key Pair": {
            description: "Generate a RSA Key Pair based on a random number generated.",
            package: "SecurityAspect",
            next: {
                "Store Public Key": {},
                "Store Private Key": {},
            }
        },
        "Store Public Key": {
            description: "Store the Public Key to be distributed later for SAB Build.",
            package: "SecurityAspect",
        },
        "Store Private Key": {
            description: "Store the Private Key to be distributed later for Device Controllers.",
            package: "SecurityAspect",
        }
    }
}
