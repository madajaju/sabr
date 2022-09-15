---
title: Package Application Manager
permalink: package--sabr-aml-am
parent: Package Application Management Layer
grand_parent: Package Sentient Agent Bundle Resources
---

# Application Manager

Application Manager is a package that defines applications that can be deployed in the SABR environment. An application is a collection of SABRs connected together in the ecosystem. Capabilities are made up of one or more applications, services and SABRs.



## Use Cases

The following are the use cases of the Application Manager subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.

* [Integrate Learning](usecase-IntegrateLearning)
* [Manage Application](usecase-ManageApplication)


![UseCase Diagram](./usecases.png)

## Users

The following are the actors of the Application Manager subsystem. This can include people, other subsystems
inside the solution and even external subsystems.

* [ApplicationDeveloper](actor-applicationdeveloper)
* [DevOpsEngineer](actor-devops)


![User Interaction](./userinteraction.png)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.png)

* [ sabr aml am application create](#action--sabr-aml-am-application-create)
* [ sabr aml am application destroy](#action--sabr-aml-am-application-destroy)
* [ sabr aml am application list](#action--sabr-aml-am-application-list)
* [ sabr aml am application update](#action--sabr-aml-am-application-update)
* [ sabr aml am service deployed](#action--sabr-aml-am-service-deployed)
* [ sabr aml am service kill](#action--sabr-aml-am-service-kill)
* [ sabr aml am service provision](#action--sabr-aml-am-service-provision)
* [ sabr aml am service stderr](#action--sabr-aml-am-service-stderr)
* [ sabr aml am service stdout](#action--sabr-aml-am-service-stdout)


## Logical Artifacts

The Data Model for the  Application Manager subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.png)

### Sub Packages

The Application Manager subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.



![Logical Diagram](./logical.png)

### Classes

The following are the classes in the data model of the Application Manager subsystem.

* [Application](class-Application)
* [ApplicationInstance](class-ApplicationInstance)
* [Service](class-Service)
* [ServiceInstance](class-ServiceInstance)
* [Stack](class-Stack)
* [StackInstance](class-StackInstance)



## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is
dependent on the environment it is deployed. This subsystem has the following environments:
* [local](environment--sabr-aml-am-local)
* [dev](environment--sabr-aml-am-dev)
* [test](environment--sabr-aml-am-test)
* [prod](environment--sabr-aml-am-prod)



## Physical Architecture

The Application Manager subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [local](environment--sabr-aml-am-local)
* [dev](environment--sabr-aml-am-dev)
* [test](environment--sabr-aml-am-test)
* [prod](environment--sabr-aml-am-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### local

Detail information for the [local environment](environment--sabr-aml-am-local)
can be found [here](environment--sabr-aml-am-local)

Services in the local environment

* web : sabr_aml_am_web


### dev

Detail information for the [dev environment](environment--sabr-aml-am-dev)
can be found [here](environment--sabr-aml-am-dev)

Services in the dev environment

* web : sabr_aml_am_web


### test

Detail information for the [test environment](environment--sabr-aml-am-test)
can be found [here](environment--sabr-aml-am-test)

Services in the test environment

* web : sabr_aml_am_web


### prod

Detail information for the [prod environment](environment--sabr-aml-am-prod)
can be found [here](environment--sabr-aml-am-prod)

Services in the prod environment

* web : sabr_aml_am_web


## Activities and Flows
The Application Manager subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.


### Messages Handled

The Application Manager subsystem is an event driven architecture and handle several events. The following
events are handled by this subsystem. Please note that this subsystem is not the only subsystem that handles
these events.

| Message | Action | Description |
| --- | --- | --- |
| serviceinstance.deployed | /aml/am/service/provision |  |
| serviceinstance.killed | Custom Action |  |



### Messages Sent

| Event | Description | Emitter |
|-------|-------------|---------|
| application.create |  When an object of type Application is created. | Application
| application.destroy |  When an object of type Application is destroyed. | Application
| application.updated |  When an object of type Application has an attribute or association updated. | Application
| applicationinstance.create |  When an object of type ApplicationInstance is created. | ApplicationInstance
| applicationinstance.destroy |  When an object of type ApplicationInstance is destroyed. | ApplicationInstance
| applicationinstance.updated |  When an object of type ApplicationInstance has an attribute or association updated. | ApplicationInstance
| service.create |  When an object of type Service is created. | Service
| service.destroy |  When an object of type Service is destroyed. | Service
| service.updated |  When an object of type Service has an attribute or association updated. | Service
| serviceinstance.create |  When an object of type ServiceInstance is created. | ServiceInstance
| serviceinstance.destroy |  When an object of type ServiceInstance is destroyed. | ServiceInstance
| serviceinstance.updated |  When an object of type ServiceInstance has an attribute or association updated. | ServiceInstance
| stack.create |  When an object of type Stack is created. | Stack
| stack.destroy |  When an object of type Stack is destroyed. | Stack
| stack.updated |  When an object of type Stack has an attribute or association updated. | Stack
| stackinstance.create |  When an object of type StackInstance is created. | StackInstance
| stackinstance.destroy |  When an object of type StackInstance is destroyed. | StackInstance
| stackinstance.updated |  When an object of type StackInstance has an attribute or association updated. | StackInstance



## Interface Details
The Application Manager subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

### Action  sabr aml am application create



* REST - /sabr/aml/am/application/create?attr1=string
* bin -  sabr aml am application create --attr1 string
* js - .sabr.aml.am.application.create({ attr1:string })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml am application destroy



* REST - /sabr/aml/am/application/destroy?attr1=string
* bin -  sabr aml am application destroy --attr1 string
* js - .sabr.aml.am.application.destroy({ attr1:string })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml am application list



* REST - /sabr/aml/am/application/list?attr1=string
* bin -  sabr aml am application list --attr1 string
* js - .sabr.aml.am.application.list({ attr1:string })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml am application update



* REST - /sabr/aml/am/application/update?attr1=string
* bin -  sabr aml am application update --attr1 string
* js - .sabr.aml.am.application.update({ attr1:string })

#### Description
Description of the action

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| attr1 | string |false | Description for the parameter |



### Action  sabr aml am service deployed



* REST - /sabr/aml/am/service/deployed?service=string&amp;url=string
* bin -  sabr aml am service deployed --service string --url string
* js - .sabr.aml.am.service.deployed({ service:string,url:string })

#### Description
Notification that the service is deployed

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| service | string |true | ID of the Service that is ready |
| url | string |false | URL or streamID of the service that is ready |



### Action  sabr aml am service kill



* REST - /sabr/aml/am/service/kill?
* bin -  sabr aml am service kill 
* js - .sabr.aml.am.service.kill({  })

#### Description
Service is being killed

#### Parameters

No parameters


### Action  sabr aml am service provision



* REST - /sabr/aml/am/service/provision?service=string&amp;url=string
* bin -  sabr aml am service provision --service string --url string
* js - .sabr.aml.am.service.provision({ service:string,url:string })

#### Description
Provision the service

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| service | string |true | Name or ID of the service to provision |
| url | string |true | URL of the service instance |



### Action  sabr aml am service stderr



* REST - /sabr/aml/am/service/stderr?
* bin -  sabr aml am service stderr 
* js - .sabr.aml.am.service.stderr({  })

#### Description
Return stderr of the service instance

#### Parameters

No parameters


### Action  sabr aml am service stdout



* REST - /sabr/aml/am/service/stdout?
* bin -  sabr aml am service stdout 
* js - .sabr.aml.am.service.stdout({  })

#### Description
Return stdout of the service instance

#### Parameters

No parameters



