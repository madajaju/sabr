---
layout: default
title: Deploy Capability
permalink: usecase-DeployCapability
parent: usecases
---
# Deploy Capability

Deploy Capability is the description

![Activities Diagram](./activities.svg)

## Actors

* [DevOps Engineer](actor-devopsengineer)





## Extends Use Cases


* [0](usecase-0)







## Detail Scenarios

* [Deploy Capability](#scenario-DeployCapabilityRelease)

  

### Scenario Deploy Capability Release

Deploy Capability Release is the description

![Scenario DeployCapabilityRelease](./deploycapabilityrelease.svg)

#### Steps

1. [capability create --name myCapability1 --file ./templates/capability.js](#action-capability create)

1. [aml cm capability deploy --capability myCapability1](#action-aml cm capability deploy)


#### Actors

* [DevOps Engineer](actor-devopsengineer)




