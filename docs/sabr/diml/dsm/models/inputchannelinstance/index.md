---
layout: default
title: Class InputChannelInstance
permalink: class-InputChannelInstance
parent: Classes
---

# InputChannelInstance

This is the input to the transformation. Also known as the consumer of the data stream. This is a specialization of the DataStreamInstance.

![Logical Diagram](./logical.png)

## Attributes

* consumer:ref - This is the actual consumer of the datastream. It is implemented using Pulsar or kafka.
* name:string - Name of the data channel instance
* direction:string - 
* message:string - Message string from the failed state.


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| transforms | n | DataTransform |  |  | Transformations to process when data arrives in this channel. |
| design | 1 | DataChannel |  |  | Parent of the channel Instance. This is the definition of the channel. |
| stream | 1 | DataStreamInstance |  |  | This is the stream instance that is running the channel |
| transformInstance | n | ServiceInstance |  |  | This is the instance of the transformation Service for the channel. |
| bundle | 1 | SABundleInstance |  |  | This is the sabr instance |





## State Net
The InputChannelInstance has a state net corresponding to instances of the class. Each state transistion will emit an 
event that can be caught with a websocket client. The name of the event is the name of the state in all lower case.
The following diagram is the state net for this class.

![State Net Diagram](./statenet.png)

| Name | Description | Events |
| --- | --- | --- |
| Init | Initial State | create-&gt;Created,  |
| Created | The Channel is created but not connected to message queues | deploy-&gt;Deploying,  |
| Deploying | The channel is currently being deployed and connected to the message queues | deployed-&gt;Enabled, failed-&gt;Failed,  |
| Enabled | Channel can send information. | disable-&gt;Disabled,  |
| Disabled | Channel cannot send information. | enable-&gt;Enabled,  |
| Failed | State of the Channel if it failed to deploy! |  |



## Methods

* [create() - Create a Input Channel Instance](#action-create)

* [deploy() - Deploy the channel instance](#action-deploy)

* [failed() - Deployment Failed on the Data Channel Instance.](#action-failed)


<h2>Method Details</h2>
    
### Action inputchannelinstance create



* REST - inputchannelinstance/create?
* bin - inputchannelinstance create 
* js - inputchannelinstance.create({  })

#### Description
Create a Input Channel Instance

#### Parameters

No parameters



### Action inputchannelinstance deploy



* REST - inputchannelinstance/deploy?
* bin - inputchannelinstance deploy 
* js - inputchannelinstance.deploy({  })

#### Description
Deploy the channel instance

#### Parameters

No parameters



### Action inputchannelinstance failed



* REST - inputchannelinstance/failed?message=string
* bin - inputchannelinstance failed --message string
* js - inputchannelinstance.failed({ message:string })

#### Description
Deployment Failed on the Data Channel Instance.

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| message | string |true | Failed Message for the deployment error. |





