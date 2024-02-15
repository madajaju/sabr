---
title: Manage Builds
permalink: usecase-ManageBuilds
parent: UseCases
---
# Manage Builds

Manage Builds is the description

![Activities Diagram](./Activities.png)

## Actors

* [Actor](actor-actor)











## Detail Scenarios

* [CancelBuild](#scenario-CancelBuild)
* [CreateBuild](#scenario-CreateBuild)
* [LaunchBuild](#scenario-LaunchBuild)
* [ListBuilds](#scenario-ListBuilds)
* [MonitorBuild](#scenario-MonitorBuild)
* [RestartBuild](#scenario-RestartBuild)



### Scenario Cancel Build

Cancel Build is the description

![Scenario CancelBuild](./CancelBuild.png)

#### Steps
1. [build create --name hello --file ./templates/build.yml](#action-build create)
1. [build cancel --name hello](#action-build cancel)

#### Actors

* [DevOps Engineer](actor-devops)



### Scenario Create Build

Create Build is the description

![Scenario CreateBuild](./CreateBuild.png)

#### Steps
1. [build create --name hello --file ./templates/build.yml](#action-build create)

#### Actors

* [DevSecOpsManager](actor-devsecopsmanager)



### Scenario Launch Build

Launch Build is the description

![Scenario LaunchBuild](./LaunchBuild.png)

#### Steps
1. [build create --name hello --file ./templates/build.yml](#action-build create)
1. [build launch --name hello --parameter1 State1 --parameter2 State2](#action-build launch)

#### Actors

* [Actor](actor-actor)



### Scenario List Builds

List Builds is the description

![Scenario ListBuilds](./ListBuilds.png)

#### Steps
1. [build list ](#action-build list)

#### Actors

* [DevSecOpsManager](actor-devsecopsmanager)



### Scenario Monitor Build

Monitor Build is the description

![Scenario MonitorBuild](./MonitorBuild.png)

#### Steps
1. [build monitor ](#action-build monitor)

#### Actors

* [DevSecOpsManager](actor-devsecopsmanager)



### Scenario Restart Build

Restart Build is the description

![Scenario RestartBuild](./RestartBuild.png)

#### Steps
1. [build restart --name hello1 --parameter1 StateA --parameter2 StateB](#action-build restart)

#### Actors

* [DevSecOpsManager](actor-devsecopsmanager)




