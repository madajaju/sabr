---
layout: default
title: Class StackInstance
permalink: class-StackInstance
parent: Classes
---

# StackInstance

The StackInstance represents the execution of the Stack. This allows for control of the stack during execution.

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the stackinstance
* stdout:string - 
* stderr:string - 
* pid:string - process id of the service instance
* url:string - 


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| app | 1 | ApplicationInstance | false | false | Application Instance of the stack instance |
| stack | 1 | Stack | false | false | Stack of the Stack Instance |
| services | n | ServiceInstance | true | true | Instances of the Services running in the Stack |
| parent | 1 | Service |  |  | Service definition for the instance. |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| stack | 1 | ServiceInstance | false | false | StackInstance that is running the service instance |
| instances | n | Stack | true | true | Instances of the stack |
| stack | n | SABundleInstance | false | false |  |



## State Net
The StackInstance has a state net corresponding to instances of the class. Each state transistion will emit an 
event that can be caught with a websocket client. The name of the event is the name of the state in all lower case.
The following diagram is the state net for this class.

![State Net Diagram](./statenet.png)

| Name | Description | Events |
| --- | --- | --- |
| Init | Initial State | create-&gt;Deploying,  |
| Deploying | Deploying the Stack Instance by provisioning all the resources and data for the services | requestData-&gt;undefined, requestResources-&gt;undefined,  |
| Deployed | The Service is deployed and ready for provisioning |  |
| Provisioning | The Service is provisioning software. |  |
| Running | The Service is running in the ecosystem |  |
| Killing | The Service is being killed |  |
| Failed | The ServiceInstance has failed |  |
| Completed | The ServiceInstance has completed successfully |  |
| Killed | The ServiceInstance has been killed successfully |  |



## Methods

* [launched() - Notification that the Service Instance was launched](#action-launched)

* [provision() - Provision the service with the provision script.](#action-provision)


<h2>Method Details</h2>
    
### Action stackinstance launched



* REST - stackinstance/launched?pid=string
* bin - stackinstance launched --pid string
* js - stackinstance.launched({ pid:string })

#### Description
Notification that the Service Instance was launched

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| pid | string | | Process id of the service instance |




### Action stackinstance provision



* REST - stackinstance/provision?
* bin - stackinstance provision 
* js - stackinstance.provision({  })

#### Description
Provision the service with the provision script.

#### Parameters

No parameters




