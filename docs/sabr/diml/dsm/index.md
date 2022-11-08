---
layout: default
title: Package Data Stream Manager
permalink: package--sabr-diml-dsm
parent: Package Distributed Information Management Layer
grand_parent: Package Sentient Agent Bundle Resources
---

# Data Stream Manager

Data Stream Manager is a package that contains the software stack for the data stream management.The first implementation of SABR will use Apache Pulsar to manage the data streams in the solution.



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

* pulsar : sabr_diml_dsm:standalone


### dev

Detail information for the [dev environment](environment--sabr-diml-dsm-dev)
can be found [here](environment--sabr-diml-dsm-dev)

Services in the dev environment

* pulsar : sabr_diml_dsm:standalone


### test

Detail information for the [test environment](environment--sabr-diml-dsm-test)
can be found [here](environment--sabr-diml-dsm-test)

Services in the test environment

* pulsar : sabr_diml_dsm:standalone


### prod

Detail information for the [prod environment](environment--sabr-diml-dsm-prod)
can be found [here](environment--sabr-diml-dsm-prod)

Services in the prod environment

* pulsar : sabr_diml_dsm:standalone


## Activities and Flows
The Data Stream Manager subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.


### Messages Handled

The Data Stream Manager subsystem is an event driven architecture and handle several events. The following
events are handled by this subsystem. Please note that this subsystem is not the only subsystem that handles
these events.

| Message | Action | Description |
| --- | --- | --- |
| inputchannelinstance.enabled | /sabr/diml/dsm/channel/deployed |  |
| inputstreaminstance.enabled | /sabr/diml/dsm/stream/deployed |  |
| outputchannelinstance.enabled | /sabr/diml/dsm/channel/deployed |  |
| outputstreaminstance.enabled | /sabr/diml/dsm/stream/deployed |  |



### Messages Sent

| Event | Description | Emitter |
|-------|-------------|---------|
| datachannel.create |  When an object of type DataChannel is created. | DataChannel
| datachannel.destroy |  When an object of type DataChannel is destroyed. | DataChannel
| datachannel.updated |  When an object of type DataChannel has an attribute or association updated. | DataChannel
| datachannelinstance.create |  When an object of type DataChannelInstance is created. | DataChannelInstance
| datachannelinstance.destroy |  When an object of type DataChannelInstance is destroyed. | DataChannelInstance
| datachannelinstance.updated |  When an object of type DataChannelInstance has an attribute or association updated. | DataChannelInstance
| datastream.create |  When an object of type DataStream is created. | DataStream
| datastream.destroy |  When an object of type DataStream is destroyed. | DataStream
| datastream.updated |  When an object of type DataStream has an attribute or association updated. | DataStream
| datastreaminstance.create |  When an object of type DataStreamInstance is created. | DataStreamInstance
| datastreaminstance.destroy |  When an object of type DataStreamInstance is destroyed. | DataStreamInstance
| datastreaminstance.updated |  When an object of type DataStreamInstance has an attribute or association updated. | DataStreamInstance
| inputchannelinstance.create |  When an object of type InputChannelInstance is created. | InputChannelInstance
| inputchannelinstance.destroy |  When an object of type InputChannelInstance is destroyed. | InputChannelInstance
| inputchannelinstance.updated |  When an object of type InputChannelInstance has an attribute or association updated. | InputChannelInstance
| inputstreaminstance.create |  When an object of type InputStreamInstance is created. | InputStreamInstance
| inputstreaminstance.destroy |  When an object of type InputStreamInstance is destroyed. | InputStreamInstance
| inputstreaminstance.updated |  When an object of type InputStreamInstance has an attribute or association updated. | InputStreamInstance
| outputchannelinstance.create |  When an object of type OutputChannelInstance is created. | OutputChannelInstance
| outputchannelinstance.destroy |  When an object of type OutputChannelInstance is destroyed. | OutputChannelInstance
| outputchannelinstance.updated |  When an object of type OutputChannelInstance has an attribute or association updated. | OutputChannelInstance
| outputstreaminstance.create |  When an object of type OutputStreamInstance is created. | OutputStreamInstance
| outputstreaminstance.destroy |  When an object of type OutputStreamInstance is destroyed. | OutputStreamInstance
| outputstreaminstance.updated |  When an object of type OutputStreamInstance has an attribute or association updated. | OutputStreamInstance
| streampolicy.create |  When an object of type StreamPolicy is created. | StreamPolicy
| streampolicy.destroy |  When an object of type StreamPolicy is destroyed. | StreamPolicy
| streampolicy.updated |  When an object of type StreamPolicy has an attribute or association updated. | StreamPolicy



## Interface Details
The Data Stream Manager subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.

### Action  sabr diml dsm channel deployed



* REST - /sabr/diml/dsm/channel/deployed?channel=string
* bin -  sabr diml dsm channel deployed --channel string
* js - .sabr.diml.dsm.channel.deployed({ channel:string })

#### Description
Channel Instance has been deployed. Notify the stream of its status.

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| channel | string |true | Channel name |



### Action  sabr diml dsm stream deployed



* REST - /sabr/diml/dsm/stream/deployed?stream=string
* bin -  sabr diml dsm stream deployed --stream string
* js - .sabr.diml.dsm.stream.deployed({ stream:string })

#### Description
Stream has been deployed. Notify the bundle of its status.

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| stream | string |true | Stream name |




