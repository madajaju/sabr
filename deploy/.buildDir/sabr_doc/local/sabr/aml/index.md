---
layout: default
title: Package Application Management Layer
permalink: package--sabr-aml
parent: Package Sentient Agent Bundle Resources
has_children: true
---

# Application Management Layer

Application Management Layer is responsible for the management of applications and workflows andthe development, test, deployment and updates of those applications and workloads.



## Use Cases

The following are the use cases of the Application Management Layer subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.



![UseCase Diagram](./usecases.png)

## Users

The following are the actors of the Application Management Layer subsystem. This can include people, other subsystems
inside the solution and even external subsystems.



![User Interaction](./userinteraction.png)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.png)



## Logical Artifacts

The Data Model for the  Application Management Layer subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.png)

### Sub Packages

The Application Management Layer subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.

* [Application Manager](package--sabr-aml-am)
* [Capability Manager](package--sabr-aml-cm)
* [DevSecOpsManager](package--sabr-aml-dsom)
* [Learning Corpus](package--sabr-aml-lc)


![Logical Diagram](./logical.png)

### Classes

The following are the classes in the data model of the Application Management Layer subsystem.




## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is
dependent on the environment it is deployed. This subsystem has the following environments:
* [local](environment--sabr-aml-local)
* [dev](environment--sabr-aml-dev)
* [test](environment--sabr-aml-test)
* [prod](environment--sabr-aml-prod)



## Physical Architecture

The Application Management Layer subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [local](environment--sabr-aml-local)
* [dev](environment--sabr-aml-dev)
* [test](environment--sabr-aml-test)
* [prod](environment--sabr-aml-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### local

Detail information for the [local environment](environment--sabr-aml-local)
can be found [here](environment--sabr-aml-local)

Services in the local environment

* am : sabr_aml_am
* cm : sabr_aml_cm
* lc : sabr_aml_lc


### dev

Detail information for the [dev environment](environment--sabr-aml-dev)
can be found [here](environment--sabr-aml-dev)

Services in the dev environment

* am : sabr_aml_am
* cm : sabr_aml_cm
* lc : sabr_aml_lc


### test

Detail information for the [test environment](environment--sabr-aml-test)
can be found [here](environment--sabr-aml-test)

Services in the test environment

* am : sabr_aml_am
* cm : sabr_aml_cm
* lc : sabr_aml_lc


### prod

Detail information for the [prod environment](environment--sabr-aml-prod)
can be found [here](environment--sabr-aml-prod)

Services in the prod environment

* am : sabr_aml_am
* cm : sabr_aml_cm
* lc : sabr_aml_lc


## Activities and Flows
The Application Management Layer subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.




### Messages Sent

| Event | Description | Emitter |
|-------|-------------|---------|



## Interface Details
The Application Management Layer subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.


