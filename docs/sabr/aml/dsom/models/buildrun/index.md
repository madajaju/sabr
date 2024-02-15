---
layout: default
title: Class BuildRun
permalink: class-BuildRun
parent: Classes
---

# BuildRun

This is a run for the build specified. It contains the logs and the results of running the build.

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the build
* startTime:date - Start of the build run
* endTime:date - Time the build finished


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| build | 1 | BuildInstance | false |  |  |
| logs | n | BuildLog | true | true |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| runs | n | BuildInstance | true | true |  |
| runs | n | Environment | false | false |  |



## State Net
The BuildRun has a state net corresponding to instances of the class. Each state transistion will emit an 
event that can be caught with a websocket client. The name of the event is the name of the state in all lower case.
The following diagram is the state net for this class.

![State Net Diagram](./statenet.png)

| Name | Description | Events |
| --- | --- | --- |
| Init | Initial State | create-&gt;Scheduled,  |
| Scheduled | Build Run Scheduled to start | run-&gt;Running,  |
| Running | The Build is running | finished-&gt;Completed, cancel-&gt;Cancelled, failed-&gt;Failed,  |
| Completed | The Build Run is completed successfully |  |
| Cancelled | The Build Run was cancelled |  |
| Failed | The Build Run failed to complete |  |



## Methods


<h2>Method Details</h2>
    

