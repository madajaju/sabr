---
layout: default
title: Manage Application
permalink: usecase-ManageApplication
parent: usecases
---
# Manage Application

Manage Application is the description

![Activities Diagram](./activities.svg)

## Actors

* [DevOps Engineer](actor-devopsengineer)
* [Software Developer](actor-softwaredeveloper)











## Detail Scenarios

* [Manage Application](#scenario-CreateApplication)
* [Manage Application](#scenario-DestroyApplication)
* [Manage Application](#scenario-UpdateApplication)

  

### Scenario Create Application

Create Application is the description

![Scenario CreateApplication](./createapplication.svg)

#### Steps

1. [application create --name hello --file ./templates/application.yml](#action-application-create)


#### Actors

* [Software Developer](actor-softwaredeveloper)



### Scenario Destroy Application

Destroy Application is the description

![Scenario DestroyApplication](./destroyapplication.svg)

#### Steps

1. [application destroy --name hello](#action-application-destroy)


#### Actors

* [DevOps Engineer](actor-devopsengineer)



### Scenario Update Application

Update Application is the description

![Scenario UpdateApplication](./updateapplication.svg)

#### Steps

1. [application update --name hello --file ./templates/world.yml](#action-application-update)


#### Actors

* [DevOps Engineer](actor-devopsengineer)




