---
layout: default
title: Class DataStream
permalink: class-DataStream
parent: Classes
---

# DataStream

A Data stream defines where I am getting data from or pushing data.

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the Data Stream


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| policies | n | StreamPolicy | false | false | This is the collection policies that apply to the stream when the stream is created. |
| channels | n | DataChannel | true | true | This is the collection of channel that are attached to this data stream |
| instances | n | DataStreamInstance | false | true | This is the collection of deployed data streams in the system of this specific data stream. |
| transforms | n | DataTransform |  |  | This is the transformation that is called on data arriving to the Data Stream. |
| consumers | n | SABundle |  |  | This is a consumer of the data stream. |
| producers | n | SABundle |  |  | This is a producer of the data stream. |
| encryptionKey | 1 | SecurityKey |  |  | This is the encryption key for the data stream |
| decryptionKey | 1 | SecurityKey |  |  | This is the decryption key for the data stream |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| stream | 1 | DataChannel |  |  | This is the owning stream |
| parent | 1 | DataStreamInstance |  |  | This is the parent of the data stream instance. |
| parent | 1 | InputStreamInstance |  |  | This is the parent of the data stream instance. |
| parent | 1 | OutputStreamInstance |  |  | This is the parent of the data stream instance. |
| stream | n | StreamPolicy | false | false | This is the collection of streams that the policy is attached. The policy will only apply to the attached DataStreams. |
| inputs | n | AdminTransform |  |  | Inputs of the transformation. |
| outputs | n | AdminTransform |  |  | Outputs of the transformation. |
| inputs | n | DataTransform |  |  | Inputs of the transformation. |
| outputs | n | DataTransform |  |  | Outputs of the transformation. |
| inputs | n | SABundle | false | false | Input Data Streams for the SABR |
| outputs | n | SABundle | false | false | Output Data Streams for the SABR |
| learningStream | 1 | SABundle |  |  | Learning Corpus Stream receives updates and sends out updates to the aimodel |
| adminStream | 1 | SABundle |  |  | Administration Stream to handle registration of SABRS to Capabilities |



## State Net
The DataStream has a state net corresponding to instances of the class. Each state transistion will emit an 
event that can be caught with a websocket client. The name of the event is the name of the state in all lower case.
The following diagram is the state net for this class.

![State Net Diagram](./statenet.png)

| Name | Description | Events |
| --- | --- | --- |
| Init | Initial State | build-&gt;Building,  |
| Building | Building the Data Stream | built-&gt;Created,  |
| Created | DataStream is created | deploy-&gt;Enabled,  |
| Disabled | DataStream is disabled | enable-&gt;Enabled, destroy-&gt;Destroyed,  |
| Enabled | DataStream is Enabled | disable-&gt;Disabled,  |
| Failed | Failed to build |  |
| Destroyed | DataStream is destroyed |  |



## Methods
* [addKeysToStore() - Build a Data Stream, generates the security keys for the data stream.](#action-addKeysToStore)
* [build() - Build a Data Stream, generates the security keys for the data stream.](#action-build)
* [provision() - Provision a DataStream creates and instances of the data streamm to be deployed.](#action-provision)


<h2>Method Details</h2>
    
### Action datastream addKeysToStore



* REST - datastream/addKeysToStore?keyType=string&amp;store=ref
* bin - datastream addKeysToStore --keyType string --store ref
* js - datastream.addKeysToStore({ keyType:string,store:ref })

#### Description
Build a Data Stream, generates the security keys for the data stream.

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| keyType | string |true | The type of keys to add to the store encrypt or decrypt |
| store | ref |true |  |




### Action datastream build



* REST - datastream/build?
* bin - datastream build 
* js - datastream.build({  })

#### Description
Build a Data Stream, generates the security keys for the data stream.

#### Parameters

No parameters



### Action datastream provision



* REST - datastream/provision?bundle=ref&amp;policies=ref
* bin - datastream provision --bundle ref --policies ref
* js - datastream.provision({ bundle:ref,policies:ref })

#### Description
Provision a DataStream creates and instances of the data streamm to be deployed.

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| bundle | ref |true | Bundle Instance to attach the stream instances. |
| policies | ref |true | Policies to use for deploying the Bundle. |




