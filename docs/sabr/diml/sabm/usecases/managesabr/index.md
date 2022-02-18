---
layout: default
title: Manage SABR
permalink: usecase-ManageSABR
parent: usecases
---
# Manage SABR

Manage SABR is the description

![Activities Diagram](./activities.svg)

## Actors

* [DevOps Engineer](actor-devopsengineer)











## Detail Scenarios

* [Manage SABR](#scenario-CreateSABR)
* [Manage SABR](#scenario-DeploySABR)
* [Manage SABR](#scenario-DeploySABR2)
* [Manage SABR](#scenario-DeploySABR3)
* [Manage SABR](#scenario-DeploySABR4)

  

### Scenario Create SABR

Create SABR is the description

![Scenario CreateSABR](./createsabr.svg)

#### Steps

1. [sabundle create --name mySABR1 --file ./templates/bundle1.js](#action-sabundle create)

1. [sabundle create --name mySABR2 --file ./templates/bundle2.js](#action-sabundle create)

1. [sabundle create --name mySABR3 --file ./templates/bundle3.js](#action-sabundle create)

1. [sabundle create --name mySABR4 --file ./templates/bundle4.js](#action-sabundle create)


#### Actors

* [SoftwareEngineer](actor-softwareengineer)



### Scenario Deploy SABR

Deploy SABR is the description

![Scenario DeploySABR](./deploysabr.svg)

#### Steps

1. [sabundle create --name mySABR1 --file ./templates/bundle1.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR1 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devopsengineer)



### Scenario Deploy SABR two

Deploy SABR is the description

![Scenario DeploySABRtwo](./deploysabrtwo.svg)

#### Steps

1. [sabundle create --name mySABR2 --file ./templates/bundle2.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR2 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devopsengineer)



### Scenario Deploy SABR three

Deploy SABR is the description

![Scenario DeploySABRthree](./deploysabrthree.svg)

#### Steps

1. [sabundle create --name mySABR3 --file ./templates/bundle3.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR3 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devopsengineer)



### Scenario Deploy SABR four

Deploy SABR is the description

![Scenario DeploySABRfour](./deploysabrfour.svg)

#### Steps

1. [sabundle create --name mySABR3 --file ./templates/bundle3.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR3 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devopsengineer)




