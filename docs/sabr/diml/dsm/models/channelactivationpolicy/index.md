---
layout: default
title: Class ChannelActivationPolicy
permalink: class-ChannelActivationPolicy
parent: Classes
---

# ChannelActivationPolicy

This policy is applied in the SABR to turn on and off channels based on a set of criteria. It also priortizes the Channels based on the set of criteria as well.

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the policy


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| channels | n | ChannelActivationItem | true | true |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| parent | 1 | ChannelActivationItem |  |  |  |



## State Net
The ChannelActivationPolicy has a state net corresponding to instances of the class. Each state transistion will emit an 
event that can be caught with a websocket client. The name of the event is the name of the state in all lower case.
The following diagram is the state net for this class.

![State Net Diagram](./statenet.png)

| Name | Description | Events |
| --- | --- | --- |
| Init | Initial State | create-&gt;Enabled,  |
| Enabled | The state is enabled and ready to be activated based on the triggering criteria and events. | activate-&gt;Active, disable-&gt;Disable,  |
| Disable | The state is disabled and will not trigger | enable-&gt;Enabled,  |
| Active | The policy is currently actively being enforced. Which means that the trigger event occured and the criteria have been met. | deactivate-&gt;Enabled,  |



## Methods


<h2>Method Details</h2>
    

