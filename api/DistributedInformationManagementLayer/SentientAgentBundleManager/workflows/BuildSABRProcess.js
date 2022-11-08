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
