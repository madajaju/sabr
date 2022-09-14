---
layout: default
title: Service Orchestrator
permalink: package--sabr-sml-so
parent: Service Management Layer
grand_parent: Sentient Agent Bundle Resources
---

# Service Orchestrator

Service Orchestrator coordinates service deployment and provisions in the system. It is the jobs of the orchestrator to find resources to deploy service software. It is also the responsibility to monitor and deliver QoS and SLA for each service according to orchestration policy.



## Use Cases

The following are the use cases of the Service Orchestrator subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.



![UseCase Diagram](./usecases.png)

## Users

The following are the actors of the Service Orchestrator subsystem. This can include people, other subsystems
inside the solution and even external subsystems.



![User Interaction](./userinteraction.png)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.png)

* [ sabr sml so service ready](#action--sabr-sml-so-service-ready)


## Logical Artifacts

The Data Model for the  Service Orchestrator subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.png)

### Sub Packages

The Service Orchestrator subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.



![Logical Diagram](./logical.png)

### Classes

The following are the classes in the data model of the Service Orchestrator subsystem.

* [DockerProvisioner](class-DockerProvisioner)
* [ProcessProvisioner](class-ProcessProvisioner)
* [Provisioner](class-Provisioner)



## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is
dependent on the environment it is deployed. This subsystem has the following environments:
* [dev](environment--sabr-sml-so-dev)
* [test](environment--sabr-sml-so-test)
* [prod](environment--sabr-sml-so-prod)



## Physical Architecture

The Service Orchestrator subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [dev](environment--sabr-sml-so-dev)
* [test](environment--sabr-sml-so-test)
* [prod](environment--sabr-sml-so-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### dev

Detail information for the [dev environment](environment--sabr-sml-so-dev)
can be found [here](environment--sabr-sml-so-dev)

Services in the dev environment

* sabr_sml_so_web : sabr_sml_so_web


### test

Detail information for the [test environment](environment--sabr-sml-so-test)
can be found [here](environment--sabr-sml-so-test)

Services in the test environment

* sabr_sml_so_web : sabr_sml_so_web


### prod

Detail information for the [prod environment](environment--sabr-sml-so-prod)
can be found [here](environment--sabr-sml-so-prod)

Services in the prod environment

* sabr_sml_so_web : sabr_sml_so_web


## Activities and Flows
The Service Orchestrator subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.




### Messages Sent

| Event | Description | Emitter |
|-------|-------------|---------|
| dockerprovisioner.create |  When an object of type DockerProvisioner is created. | DockerProvisioner
| dockerprovisioner.destroy |  When an object of type DockerProvisioner is destroyed. | DockerProvisioner
| dockerprovisioner.updated |  When an object of type DockerProvisioner has an attribute or association updated. | DockerProvisioner
| processprovisioner.create |  When an object of type ProcessProvisioner is created. | ProcessProvisioner
| processprovisioner.destroy |  When an object of type ProcessProvisioner is destroyed. | ProcessProvisioner
| processprovisioner.updated |  When an object of type ProcessProvisioner has an attribute or association updated. | ProcessProvisioner
| provisioner.create |  When an object of type Provisioner is created. | Provisioner
| provisioner.destroy |  When an object of type Provisioner is destroyed. | Provisioner
| provisioner.updated |  When an object of type Provisioner has an attribute or association updated. | Provisioner



## Interface Details
The Service Orchestrator subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

### Action  sabr sml so service ready



* REST - /sabr/sml/so/service/ready?service=string&amp;url=string
* bin -  sabr sml so service ready --service string --url string
* js - .sabr.sml.so.service.ready({ service:string,url:string })

#### Description
Service is ready

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| service | string |true | ID of the Service that is ready |
| url | string |false | URL or streamID of the service that is ready |




