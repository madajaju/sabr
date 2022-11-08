module.exports = {
    name: "SABR Deployment Process",
    description: "Deploy a SABR to a device on the Edge. This includes managing the security keys and hashes in the" +
        " attestation of the device and the deployment of the SABR on the Device.",
    activities: {
        // Each activity should map to a use case, scenario, or another workflow.
        // This is the initial activity in the workflow. Everything starts here
        Init: {
            description: "Initial state for the workflow",
            actor: 'ApplicationDeveloper', // This could be an actor or package.
            next: {
                "Build SABR Process": {},
                "Security Key Generation Process": {},
            }
        },
        "Build SABR Process": {
            description: "Build the SABR from the SABM definition and encrypt the bundle.",
            package: "SentientAgentBundleManager",
            next: {
                "Deploy SABR Build Process": {},
            }
        },
        "Security Key Generation Process": {
            description: "Generate security keys so they can be used for the provisioning, encryption and decryption" +
                " of the SAB builds.",
            package: "SecurityAspect",
            next: {
                "Device Provision Process": {},
            }
        },
         "Device Provision Process": {
            description: "Provision a device so that it has the appropriate keys to work the Builds to decypt. This" +
                " should also include attestation.",
            package: "SoftwareDefinedInfrastructure",
            next: {
                "Deploy SABR Build Process": {}
            }
        },
        "Deploy SABR Build Process": {
            description: "Deploy the SABR Build to the attested device",
            package: "ServiceOrchestrator",
            next: {
                "DeploySABR": {}
            }
        },
        "DeploySABR": {
            description: "The SABR is up and running",
            package: "SentientAgentBundleManager",
        },
    }
}
