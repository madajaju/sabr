---
layout: default
title: Software Defined Infrastructure
permalink: package--sabr-sdi
parent: Sentient Agent Bundle Resources
---

# Software Defined Infrastructure

Software Defined Infrastructure(SDI) contains the abstractions for private and public clouds. The SDI layer is a common standard interface for all cloud resources both virutal, container, and bare metal.



## Use Cases

The following are the use cases of the Software Defined Infrastructure subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.



![UseCase Diagram](./usecases.svg)

## Users

The following are the actors of the Software Defined Infrastructure subsystem. This can include people, other subsystems 
inside the solution and even external subsystems. 



![User Interaction](./userinteraction.svg)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.svg)



## Logical Artifacts

The Data Model for the  Software Defined Infrastructure subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.svg)

### Sub Packages

The Software Defined Infrastructure subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.



![Logical Diagram](./logical.svg)

### Classes

The following are the classes in the data model of the Software Defined Infrastructure subsystem.




## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is 
dependent on the environment it is deployed. This subsystem has the following environments:
* [dev](environment--sabr-sdi-dev)
* [test](environment--sabr-sdi-test)
* [prod](environment--sabr-sdi-prod)



## Physical Architecture

The Software Defined Infrastructure subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors 
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [dev](environment--sabr-sdi-dev)
* [test](environment--sabr-sdi-test)
* [prod](environment--sabr-sdi-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### dev

Detail information for the [dev environment](environment--sabr-sdi-dev)
can be found [here](environment--sabr-sdi-dev)

Services in the dev environment

* child : child_image:latest
* frontend : _sdi_web
* gw : _sdi_gw


### test

Detail information for the [test environment](environment--sabr-sdi-test)
can be found [here](environment--sabr-sdi-test)

Services in the test environment

* child : child_image:latest
* frontend : _sdi_web
* gw : _sdi_gw


### prod

Detail information for the [prod environment](environment--sabr-sdi-prod)
can be found [here](environment--sabr-sdi-prod)

Services in the prod environment

* child : child_image:latest
* frontend : _sdi_web
* gw : _sdi_gw


## Activities and Flows
The Software Defined Infrastructure subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.




### Messages Sent

TBD

## Interface Details
The Software Defined Infrastructure subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

