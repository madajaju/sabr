---
layout: default
title: Data Stream Manager
permalink: package--sabr-diml-dsm
parent: Distributed Information Management Layer
grand_parent: Sentient Agent Bundle Resources
---

# Data Stream Manager

Data Stream Manager is a package that contains the software stack for the data stream management.The first implementation of SABR will use Apache Pulsar to manage the data streams.



## Use Cases

The following are the use cases of the Data Stream Manager subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.



![UseCase Diagram](./usecases.png)

## Users

The following are the actors of the Data Stream Manager subsystem. This can include people, other subsystems
inside the solution and even external subsystems.



![User Interaction](./userinteraction.png)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.png)

* [ sabr diml dsm channel deployed](#action--sabr-diml-dsm-channel-deployed)
* [ sabr diml dsm stream deployed](#action--sabr-diml-dsm-stream-deployed)


## Logical Artifacts

The Data Model for the  Data Stream Manager subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.png)

### Sub Packages

The Data Stream Manager subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.



![Logical Diagram](./logical.png)

### Classes

The following are the classes in the data model of the Data Stream Manager subsystem.

* [DataChannel](class-DataChannel)
* [DataChannelInstance](class-DataChannelInstance)
* [DataStream](class-DataStream)
* [DataStreamInstance](class-DataStreamInstance)
* [InputChannelInstance](class-InputChannelInstance)
* [InputStreamInstance](class-InputStreamInstance)
* [OutputChannelInstance](class-OutputChannelInstance)
* [OutputStreamInstance](class-OutputStreamInstance)
* [StreamPolicy](class-StreamPolicy)



## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is
dependent on the environment it is deployed. This subsystem has the following environments:
* [local](environment--sabr-diml-dsm-local)
* [dev](environment--sabr-diml-dsm-dev)
* [test](environment--sabr-diml-dsm-test)
* [prod](environment--sabr-diml-dsm-prod)



## Physical Architecture

The Data Stream Manager subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [local](environment--sabr-diml-dsm-local)
* [dev](environment--sabr-diml-dsm-dev)
* [test](environment--sabr-diml-dsm-test)
* [prod](environment--sabr-diml-dsm-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### local

Detail information for the [local environment](environment--sabr-diml-dsm-local)
can be found [here](environment--sabr-diml-dsm-local)

Services in the local environment

* pulsar : sabr_pulsar:local


### dev

Detail information for the [dev environment](environment--sabr-diml-dsm-dev)
can be found [here](environment--sabr-diml-dsm-dev)

Services in the dev environment

* pulsar : sabr_pulsar:local


### test

Detail information for the [test environment](environment--sabr-diml-dsm-test)
can be found [here](environment--sabr-diml-dsm-test)

Services in the test environment

* pulsar : sabr_pulsar:local


### prod

Detail information for the [prod environment](environment--sabr-diml-dsm-prod)
can be found [here](environment--sabr-diml-dsm-prod)

Services in the prod environment

* pulsar : sabr_pulsar:local


## Activities and Flows
The Data Stream Manager subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.




### Messages Sent

TBD

## Interface Details
The Data Stream Manager subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

### Action  sabr diml dsm channel deployed

* REST - /sabr/diml/dsm/channel/deployed
* bin -  sabr diml dsm channel deployed
* js - .sabr.diml.dsm.channel.deployed

Channel Instance has been deployed. Notify the stream of its status.

| Name | Type | Required | Description |
|---|---|---|---|
| channel | string |true | Channel name |



### Action  sabr diml dsm stream deployed

* REST - /sabr/diml/dsm/stream/deployed
* bin -  sabr diml dsm stream deployed
* js - .sabr.diml.dsm.stream.deployed

Channel Instance has been deployed. Notify the stream of its status.

| Name | Type | Required | Description |
|---|---|---|---|
| stream | string |true | Stream name |




