---
layout: default
title: Class ProcessProvisioner
permalink: class-ProcessProvisioner
parent: classes
---

# ProcessProvisioner

Provisions services as spawned processes.

![Logical Diagram](./logical.svg)

## Attributes

* name:string - Name of the provisioner
* config:json - Configuration for the provisioner.


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| services | n | ServiceInstance | false | false |  |


## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |





## Methods

* [deploy() - Deploy a Service](#action-deploy)


<h2>Method Details</h2>
    
### Action processprovisioner deploy

* REST - processprovisioner/deploy
* bin - processprovisioner deploy
* js - processprovisioner.deploy

Deploy a Service

| Name | Type | Required | Description |
|---|---|---|---|
| services | ref |true | Service to deploy |





