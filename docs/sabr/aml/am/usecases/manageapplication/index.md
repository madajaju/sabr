---
layout: default
title: Manage Application
permalink: usecase-ManageApplication
parent: usecases
---
# Manage Application

Manage Applications in the system. Including deploying, and updating

![Activities Diagram](./activities.png)

## Actors

* [DevOps Engineer](actor-devops)
* [Application Developer](actor-applicationdeveloper)











## Detail Scenarios

* [Manage Application](#scenario-CreateApplication)
* [Manage Application](#scenario-DestroyApplication)
* [Manage Application](#scenario-UpdateApplication)



### Scenario Create Application

Create Application is the description

![Scenario CreateApplication](./createapplication.png)

#### Steps

1. [application create --name hello --file ./templates/application.yml](#action-application-create)


#### Actors

* [Application Developer](actor-applicationdeveloper)



### Scenario Destroy Application

Destroy Application is the description

![Scenario DestroyApplication](./destroyapplication.png)

#### Steps

1. [application destroy --name hello](#action-application-destroy)


#### Actors

* [DevOps Engineer](actor-devops)



### Scenario Update Application

Update Application is the description

![Scenario UpdateApplication](./updateapplication.png)

#### Steps

1. [application update --name hello --file ./templates/world.yml](#action-application-update)


#### Actors

* [DevOps Engineer](actor-devops)




