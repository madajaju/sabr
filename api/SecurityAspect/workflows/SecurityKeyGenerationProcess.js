

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
