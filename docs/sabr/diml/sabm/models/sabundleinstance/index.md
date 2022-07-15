---
layout: default
title: Class SABundleInstance
permalink: class-SABundleInstance
parent: classes
---

# SABundleInstance

Instance of a sentient agent bundle. This is were things are running. This includes the instances of services, channels, transformation services, etc...

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the sentient agent bundle instance
* level:string - Level of the SABR Instance. Determines the mode of operation.


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| parent | 1 | SABundle |  |  | Parent of the SAB Instance |
| inputs | n | InputStreamInstance | false | false | Input Data Streams for the SABR |
| outputs | n | OutputStreamInstance | false | false | Output Data Streams for the SABR |
| learningInput | 1 | InputStreamInstance |  |  | Learning Corpus Input Stream receives updates to the aimodel |
| learningOutput | 1 | OutputStreamInstance |  |  | Learning Corpus Output Stream receives updates to the aimodel |
| adminStream | 1 | InputStreamInstance |  |  | Administration Stream to handle registration of SABRS to Capabilities |
| admoutStream | 1 | OutputStreamInstance |  |  | Administration Stream to handle registration of SABRS and Capabilities |
| stack | n | StackInstance | false | false |  |
| aimodels | n | AIModel | false | false |  |
| transforms | n | DataTransformInstance | false | false |  |


## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| bundles | n | CapabilityInstance |  |  | Bundle instances running on the ecosystem. |
| bundle | 1 | DataChannelInstance |  |  | This is the sabr instance |
| bundle | 1 | DataStreamInstance |  |  | This is the Bundle instance that the data stream instance is connected. |
| instances | n | SABundle | false | true |  |
| bundle | 1 | InputChannelInstance |  |  | This is the sabr instance |
| bundle | 1 | InputStreamInstance |  |  | This is the Bundle instance that the data stream instance is connected. |
| bundle | 1 | OutputChannelInstance |  |  | This is the sabr instance |
| bundle | 1 | OutputStreamInstance |  |  | This is the Bundle instance that the data stream instance is connected. |



## State Net
The SABundleInstance has a state net corresponding to instances of the class. Each state transistion will emit an 
event that can be caught with a websocket client. The name of the event is the name of the state in all lower case.
The following diagram is the state net for this class.

![State Net Diagram](./statenet.png)

| Name | Description | Events |
| --- | --- | --- |
| Init | Initial State | create-&gt;Created,  |
| Created | The SABR has been created and ready to be deployed. | deploy-&gt;Deploying, deploying-&gt;Deploying,  |
| Deploying | The SABR is connecting to all of the streams including admin and learning streams. | deployed-&gt;Enabled, running-&gt;Running,  |
| Running | The SABR is Running. This state is for server that deployed the SABR. | enable-&gt;Enabled, disable-&gt;Disabled,  |
| Enabled | The SABR is running all transformation and streams are receiving and transmitting | disable-&gt;Disabled,  |
| Disabled | The SABR is disabled and is not receiving or transmitting data. | enable-&gt;Enabled,  |



## Methods

* [deploy() - Deploy a a SABundleInstance](#action-deploy)


<h2>Method Details</h2>
    
### Action sabundleinstance deploy



* REST - sabundleinstance/deploy?policies=ref
* bin - sabundleinstance deploy --policies ref
* js - sabundleinstance.deploy({ policies:ref })

#### Description
Deploy a a SABundleInstance


#### Parameters
| Name | Type | Required | Description |
|---|---|---|---|
| policies | ref |true | Policies to use for deploying the Bundle. |





