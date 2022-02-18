---
layout: default
title: Capability Manager
permalink: package--sabr-aml-cm
parent: Application Management Layer
grand_parent: Sentient Agent Bundle Resources
---

# Capability Manager

Capability Manager is a package that contains...



## Use Cases

The following are the use cases of the Capability Manager subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.

* [Deploy Capability](usecase-DeployCapability)
* [Develop Capability](usecase-DevelopCapability)
* [Remove Capbility](usecase-RemoveCapbility)
* [Update Capbility](usecase-UpdateCapbility)


![UseCase Diagram](./usecases.svg)

## Users

The following are the actors of the Capability Manager subsystem. This can include people, other subsystems 
inside the solution and even external subsystems. 

* [DevOpsEngineer](actor-devopsengineer)
* [SoftwareDeveloper](actor-softwaredeveloper)


![User Interaction](./userinteraction.svg)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.svg)

* [ sabr aml cm capability build](#action--sabr-aml-cm-capability-build)
* [ sabr aml cm capability deploy](#action--sabr-aml-cm-capability-deploy)
* [ sabr aml cm capability list](#action--sabr-aml-cm-capability-list)
* [ sabr aml cm capability release](#action--sabr-aml-cm-capability-release)
* [ sabr aml cm capability test](#action--sabr-aml-cm-capability-test)
* [ sabr aml cm data create](#action--sabr-aml-cm-data-create)
* [ sabr aml cm data govern](#action--sabr-aml-cm-data-govern)


## Logical Artifacts

The Data Model for the  Capability Manager subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.svg)

### Sub Packages

The Capability Manager subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.



![Logical Diagram](./logical.svg)

### Classes

The following are the classes in the data model of the Capability Manager subsystem.

* [Capability](class-Capability)
* [CapabilityInstance](class-CapabilityInstance)



## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is 
dependent on the environment it is deployed. This subsystem has the following environments:
* [dev](environment--sabr-aml-cm-dev)
* [test](environment--sabr-aml-cm-test)
* [prod](environment--sabr-aml-cm-prod)



## Physical Architecture

The Capability Manager subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors 
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [dev](environment--sabr-aml-cm-dev)
* [test](environment--sabr-aml-cm-test)
* [prod](environment--sabr-aml-cm-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### dev

Detail information for the [dev environment](environment--sabr-aml-cm-dev)
can be found [here](environment--sabr-aml-cm-dev)

Services in the dev environment

* child : child_image:latest
* frontend : _cm_web
* gw : _cm_gw


### test

Detail information for the [test environment](environment--sabr-aml-cm-test)
can be found [here](environment--sabr-aml-cm-test)

Services in the test environment

* child : child_image:latest
* frontend : _cm_web
* gw : _cm_gw


### prod

Detail information for the [prod environment](environment--sabr-aml-cm-prod)
can be found [here](environment--sabr-aml-cm-prod)

Services in the prod environment

* child : child_image:latest
* frontend : _cm_web
* gw : _cm_gw


## Activities and Flows
The Capability Manager subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.




### Messages Sent

TBD

## Interface Details
The Capability Manager subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

### Action  sabr aml cm capability build

* REST - /sabr/aml/cm/capability/build
* bin -  sabr aml cm capability build
* js - .sabr.aml.cm.capability.build

Build a Capability

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |true | name of the capability |



### Action  sabr aml cm capability deploy

* REST - /sabr/aml/cm/capability/deploy
* bin -  sabr aml cm capability deploy
* js - .sabr.aml.cm.capability.deploy

Deploy a Capability

| Name | Type | Required | Description |
|---|---|---|---|
| capability | string |true | name of the capability |



### Action  sabr aml cm capability list

* REST - /sabr/aml/cm/capability/list
* bin -  sabr aml cm capability list
* js - .sabr.aml.cm.capability.list

Description of the action

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml cm capability release

* REST - /sabr/aml/cm/capability/release
* bin -  sabr aml cm capability release
* js - .sabr.aml.cm.capability.release

Release a Capability

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |true | name of the capability |



### Action  sabr aml cm capability test

* REST - /sabr/aml/cm/capability/test
* bin -  sabr aml cm capability test
* js - .sabr.aml.cm.capability.test

Test a Capability

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |true | name of the capability |
| file | YAML |false | file with the definition |



### Action  sabr aml cm data create

* REST - /sabr/aml/cm/data/create
* bin -  sabr aml cm data create
* js - .sabr.aml.cm.data.create

Description of the action

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml cm data govern

* REST - /sabr/aml/cm/data/govern
* bin -  sabr aml cm data govern
* js - .sabr.aml.cm.data.govern

Description of the action

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |




