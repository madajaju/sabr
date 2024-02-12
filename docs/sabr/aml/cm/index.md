---
layout: default
title: Package Capability Manager
permalink: package--sabr-aml-cm
parent: Package Application Management Layer
grand_parent: Package Sentient Agent Bundle Resources
---

# Capability Manager

Capability Manager is a package that contains the interface for all of the use cases and models that work with capabilities. A capability can consist of one or more applications, services or SABRs deployed in the ecosystem.



## Use Cases

The following are the use cases of the Capability Manager subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.

* [Deploy Capability](usecase-DeployCapability)
* [Develop Capability](usecase-DevelopCapability)
* [Remove Capability](usecase-RemoveCapability)
* [Update Capability](usecase-UpdateCapability)


![UseCase Diagram](./usecases.png)

## Users

The following are the actors of the Capability Manager subsystem. This can include people, other subsystems
inside the solution and even external subsystems.

* [DevOpsEngineer](actor-devops)
* [ApplicationDeveloper](actor-applicationdeveloper)


![User Interaction](./userinteraction.png)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.png)

* [ sabr aml cm capability build](#action--sabr-aml-cm-capability-build)
* [ sabr aml cm capability create](#action--sabr-aml-cm-capability-create)
* [ sabr aml cm capability deploy](#action--sabr-aml-cm-capability-deploy)
* [ sabr aml cm capability list](#action--sabr-aml-cm-capability-list)
* [ sabr aml cm capability release](#action--sabr-aml-cm-capability-release)
* [ sabr aml cm capability remove](#action--sabr-aml-cm-capability-remove)
* [ sabr aml cm capability test](#action--sabr-aml-cm-capability-test)
* [ sabr aml cm capability update](#action--sabr-aml-cm-capability-update)


## Logical Artifacts

The Data Model for the  Capability Manager subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.png)

### Sub Packages

The Capability Manager subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.



![Logical Diagram](./logical.png)

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
* [local](environment--sabr-aml-cm-local)
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
* [local](environment--sabr-aml-cm-local)
* [dev](environment--sabr-aml-cm-dev)
* [test](environment--sabr-aml-cm-test)
* [prod](environment--sabr-aml-cm-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### local

Detail information for the [local environment](environment--sabr-aml-cm-local)
can be found [here](environment--sabr-aml-cm-local)

Services in the local environment

* web : sabr_aml_cm_web


### dev

Detail information for the [dev environment](environment--sabr-aml-cm-dev)
can be found [here](environment--sabr-aml-cm-dev)

Services in the dev environment

* web : sabr_aml_cm_web


### test

Detail information for the [test environment](environment--sabr-aml-cm-test)
can be found [here](environment--sabr-aml-cm-test)

Services in the test environment

* web : sabr_aml_cm_web


### prod

Detail information for the [prod environment](environment--sabr-aml-cm-prod)
can be found [here](environment--sabr-aml-cm-prod)

Services in the prod environment

* web : sabr_aml_cm_web


## Activities and Flows
The Capability Manager subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.




### Messages Sent

| Event | Description | Emitter |
|-------|-------------|---------|
| capability.create |  When an object of type Capability is created. | Capability
| capability.destroy |  When an object of type Capability is destroyed. | Capability
| capability.updated |  When an object of type Capability has an attribute or association updated. | Capability
| capabilityinstance.create |  When an object of type CapabilityInstance is created. | CapabilityInstance
| capabilityinstance.destroy |  When an object of type CapabilityInstance is destroyed. | CapabilityInstance
| capabilityinstance.updated |  When an object of type CapabilityInstance has an attribute or association updated. | CapabilityInstance



## Interface Details
The Capability Manager subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

### Action  sabr aml cm capability build



* REST - /sabr/aml/cm/capability/build?name=string&amp;id=string
* bin -  sabr aml cm capability build --name string --id string
* js - .sabr.aml.cm.capability.build({ name:string,id:string })

#### Description
Build a Capability

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |false | name of the capability |
| id | string |false | id of the capability |



### Action  sabr aml cm capability create



* REST - /sabr/aml/cm/capability/create?attr1=string
* bin -  sabr aml cm capability create --attr1 string
* js - .sabr.aml.cm.capability.create({ attr1:string })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml cm capability deploy



* REST - /sabr/aml/cm/capability/deploy?capability=string
* bin -  sabr aml cm capability deploy --capability string
* js - .sabr.aml.cm.capability.deploy({ capability:string })

#### Description
Deploy a Capability

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| capability | string |true | name of the capability |



### Action  sabr aml cm capability list



* REST - /sabr/aml/cm/capability/list?attr1=string
* bin -  sabr aml cm capability list --attr1 string
* js - .sabr.aml.cm.capability.list({ attr1:string })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml cm capability release



* REST - /sabr/aml/cm/capability/release?name=string
* bin -  sabr aml cm capability release --name string
* js - .sabr.aml.cm.capability.release({ name:string })

#### Description
Release a Capability

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |true | name of the capability |



### Action  sabr aml cm capability remove



* REST - /sabr/aml/cm/capability/remove?attr1=string
* bin -  sabr aml cm capability remove --attr1 string
* js - .sabr.aml.cm.capability.remove({ attr1:string })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml cm capability test



* REST - /sabr/aml/cm/capability/test?name=string&amp;file=YAML
* bin -  sabr aml cm capability test --name string --file YAML
* js - .sabr.aml.cm.capability.test({ name:string,file:YAML })

#### Description
Test a Capability

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |true | name of the capability |
| file | YAML |false | file with the definition |



### Action  sabr aml cm capability update



* REST - /sabr/aml/cm/capability/update?capability=string&amp;file=file
* bin -  sabr aml cm capability update --capability string --file file
* js - .sabr.aml.cm.capability.update({ capability:string,file:file })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| capability | string |true | Name or ID of the capability to update |
| file | file |false | File contains the updates for the capability |




