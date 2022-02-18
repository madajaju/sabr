---
layout: default
title: Develop Capability
permalink: usecase-DevelopCapability
parent: usecases
---
# Develop Capability

Develop Capability is the description

![Activities Diagram](./activities.svg)

## Actors

* [Software Developer](actor-softwaredeveloper)





## Extends Use Cases


* [0](usecase-0)







## Detail Scenarios

* [Develop Capability](#scenario-BuildCapability)
* [Develop Capability](#scenario-CreateCapability)
* [Develop Capability](#scenario-ReleaseCapability)
* [Develop Capability](#scenario-TestCapability)

  

### Scenario Build Capability

Build Capability is the description

![Scenario BuildCapability](./buildcapability.svg)

#### Steps

1. [capability create --name myCapabilityB1 --file ./templates/capability.yml](#action-capability-create)

1. [capability build --name myCapabilityB1](#action-capability-build)


#### Actors

* [DevOps Engineer](actor-devopsengineer)



### Scenario Create Capability

Create Capability is the description

![Scenario CreateCapability](./createcapability.svg)

#### Steps

1. [capability create --name myCapability1 --file ./templates/capability.js](#action-capability-create)

1. [capability create --name myCapability2 --file ./templates/capability.js](#action-capability-create)


#### Actors

* [DevOps Engineer](actor-devopsengineer)



### Scenario Release Capability

Release Capability is the description

![Scenario ReleaseCapability](./releasecapability.svg)

#### Steps

1. [capability create --name myCapabilityT1 --file ./templates/capability.yml](#action-capability-create)

1. [capability build --name myCapabilityT1](#action-capability-build)

1. [capability test --name myCapabilityT1](#action-capability-test)

1. [capability release --name myCapabilityT1](#action-capability-release)


#### Actors

* [DevOps Engineer](actor-devopsengineer)



### Scenario Test Capability

Test Capability is the description

![Scenario TestCapability](./testcapability.svg)

#### Steps

1. [capability create --name myCapabilityT1 --file ./templates/capability.yml](#action-capability-create)

1. [capability build --name myCapabilityT1](#action-capability-build)

1. [capability test --name myCapabilityT1](#action-capability-test)


#### Actors

* [DevOps Engineer](actor-devopsengineer)




