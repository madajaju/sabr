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
    name: "Build SABR Process",
    description: "Build and Encrypt a SABR from a SABR definition. This should include all images and packages" +
        " required to run the SABR.",
    activities: {
        // Each activity should map to a use case, scenario, or another workflow.
        // This is the initial activity in the workflow. Everything starts here
        Init: {
            description: "Initial state for the workflow",
            actor: 'DevOpsEngineer', // This could be an actor or package.
            next: {
                "Build SAB": {},
            }
        },
        "Build SAB": {
            description: "Build the SABR from the SABM definition and encrypt the bundle.",
            package: "SentientAgentBundleManager",
            next: {
                "Create Build Environment": {},
            }
        },
        "Create Build Environment": {
            description: "Create the build environment to package and encrypt the SABR bundle",
            package: "DevSecOpsManager",
            next: {
                "Build SAB": {}
            }
        },
        "Build SAB": {
            description: "This is the good flow!",
            package: "SentientAgentBundleManager",
            next: {

            }
        },
    }
}
