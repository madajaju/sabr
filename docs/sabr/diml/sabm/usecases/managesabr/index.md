---
layout: default
title: Manage SABR
permalink: usecase-ManageSABR
parent: usecases
---
# Manage SABR

Manage SABR is the description

![Activities Diagram](./activities.png)

## Actors

* [DevOps Engineer](actor-devops)











## Detail Scenarios

* [Manage SABR](#scenario-CreateSABR)
* [Manage SABR](#scenario-DeploySABR)
* [Manage SABR](#scenario-DeploySABR2)
* [Manage SABR](#scenario-DeploySABR3)
* [Manage SABR](#scenario-DeploySABR4)



### Scenario Create SABR

Create SABR is the description

![Scenario CreateSABR](./createsabr.png)

#### Steps

1. [sabundle create --name mySABR1 --file ./templates/bundle1.js](#action-sabundle create)

1. [sabundle create --name mySABR2 --file ./templates/bundle2.js](#action-sabundle create)

1. [sabundle create --name mySABR3 --file ./templates/bundle3.js](#action-sabundle create)

1. [sabundle create --name mySABR4 --file ./templates/bundle4.js](#action-sabundle create)


#### Actors

* [Application Developer](actor-applicationdeveloper)



### Scenario Deploy SABR

Deploy SABR is the description

![Scenario DeploySABR](./deploysabr.png)

#### Steps

1. [sabundle create --name mySABR1 --file ./templates/bundle1.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR1 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devops)



### Scenario Deploy SABR two

Deploy SABR is the description

![Scenario DeploySABRtwo](./deploysabrtwo.png)

#### Steps

1. [sabundle create --name mySABR2 --file ./templates/bundle2.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR2 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devops)



### Scenario Deploy SABR three

Deploy SABR is the description

![Scenario DeploySABRthree](./deploysabrthree.png)

#### Steps

1. [sabundle create --name mySABR3 --file ./templates/bundle3.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR3 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devops)



### Scenario Deploy SABR four

Deploy SABR is the description

![Scenario DeploySABRfour](./deploysabrfour.png)

#### Steps

1. [sabundle create --name mySABR3 --file ./templates/bundle3.js](#action-sabundle create)

1. [streampolicy create --name historical --file ./templates/policy1.js](#action-streampolicy create)

1. [streampolicy create --name summary --file ./templates/policy2.js](#action-streampolicy create)

1. [streampolicy create --name realtime --file ./templates/policy3.js](#action-streampolicy create)

1. [diml sabm/bundle deploy --sabr mySABR3 --policies realtime](#action-diml-sabm-bundle deploy)


#### Actors

* [DevOps Engineer](actor-devops)




