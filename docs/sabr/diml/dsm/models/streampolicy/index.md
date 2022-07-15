---
layout: default
title: Class StreamPolicy
permalink: class-StreamPolicy
parent: classes
---

# StreamPolicy

The Stream Policy takes the Data Stream and creates Data Channels based on the policies

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the policy


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| post | 1 | DataTransform |  |  | This is the transform to run after all of the transformation and before sending out. |
| pre | 1 | DataTransform |  |  | This is the transform to run after all of the transformation and before sending out. |
| stream | n | DataStream | false | false | This is the collection of streams that the policy is attached. The policy will only apply to the attached DataStreams. |
| channels | n | DataChannel | false | false | This collection of channels that are used to create channel instances when the stream is created. |


## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| policies | n | Capability |  |  | Policies to apply to the bundles when they are deployed. |
| policy | n | DataChannel |  |  | This policy is the policy that will create an instance of the data channel attached to a data stream. The policy defines how the channel is created and what transformation service to use when publishing or consuming information on the channel. |
| policies | n | DataStream | false | false | This is the collection policies that apply to the stream when the stream is created. |



## State Net
The StreamPolicy has a state net corresponding to instances of the class. Each state transistion will emit an 
event that can be caught with a websocket client. The name of the event is the name of the state in all lower case.
The following diagram is the state net for this class.

![State Net Diagram](./statenet.png)

| Name | Description | Events |
| --- | --- | --- |
| Init | Initial State | create-&gt;Created,  |
| Created | StreamPolicy is created | disable-&gt;Disabled, destroy-&gt;Destroyed,  |
| Disabled | StreamPolicy is disabled | enable-&gt;Enabled, destroy-&gt;Destroyed,  |
| Enabled | StreamPolicy is Enabled | disbale-&gt;Disabled,  |
| Destroyed | StreamPolicy is destroyed |  |



## Methods

* [create() - Create a Stream Policy](#action-create)


<h2>Method Details</h2>
    
### Action streampolicy create



* REST - streampolicy/create?name=string&amp;file=file
* bin - streampolicy create --name string --file file
* js - streampolicy.create({ name:string,file:file })

#### Description
Create a Stream Policy


#### Parameters
| Name | Type | Required | Description |
|---|---|---|---|
| name | string |true | name of the StreamPolicy |
| file | file |false | file with the definition |





