

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
