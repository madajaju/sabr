---
layout: default
title: Package Security Aspect
permalink: package--sabr-sa
parent: Package Sentient Agent Bundle Resources
has_children: true
---

# Security Aspect

SecurityAspect is a package that contains all security tools and frameworks for the system.



## Use Cases

The following are the use cases of the Security Aspect subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.



![UseCase Diagram](./usecases.png)

## Users

The following are the actors of the Security Aspect subsystem. This can include people, other subsystems
inside the solution and even external subsystems.



![User Interaction](./userinteraction.png)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.png)



## Logical Artifacts

The Data Model for the  Security Aspect subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.png)

### Sub Packages

The Security Aspect subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.

* [Edge Security Controller](package--sabr-sa-esc)
* [Key Manager](package--sabr-sa-km)


![Logical Diagram](./logical.png)

### Classes

The following are the classes in the data model of the Security Aspect subsystem.

* [KeyStore](class-KeyStore)
* [SecurityKey](class-SecurityKey)



## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is
dependent on the environment it is deployed. This subsystem has the following environments:
* [dev](environment--sabr-sa-dev)
* [test](environment--sabr-sa-test)
* [prod](environment--sabr-sa-prod)



## Physical Architecture

The Security Aspect subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [dev](environment--sabr-sa-dev)
* [test](environment--sabr-sa-test)
* [prod](environment--sabr-sa-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### dev

Detail information for the [dev environment](environment--sabr-sa-dev)
can be found [here](environment--sabr-sa-dev)

Services in the dev environment

* sabr_sa_web : sabr_sa_web


### test

Detail information for the [test environment](environment--sabr-sa-test)
can be found [here](environment--sabr-sa-test)

Services in the test environment

* sabr_sa_web : sabr_sa_web


### prod

Detail information for the [prod environment](environment--sabr-sa-prod)
can be found [here](environment--sabr-sa-prod)

Services in the prod environment

* sabr_sa_web : sabr_sa_web


## Activities and Flows
The Security Aspect subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.




### Messages Sent

| Event | Description | Emitter |
|-------|-------------|---------|
| keystore.create |  When an object of type KeyStore is created. | KeyStore
| keystore.destroy |  When an object of type KeyStore is destroyed. | KeyStore
| keystore.updated |  When an object of type KeyStore has an attribute or association updated. | KeyStore
| securitykey.create |  When an object of type SecurityKey is created. | SecurityKey
| securitykey.destroy |  When an object of type SecurityKey is destroyed. | SecurityKey
| securitykey.updated |  When an object of type SecurityKey has an attribute or association updated. | SecurityKey



## Interface Details
The Security Aspect subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

