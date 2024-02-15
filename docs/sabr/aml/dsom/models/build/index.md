---
layout: default
title: Class Build
permalink: class-Build
parent: Classes
---

# Build

This represents a build in the environment.

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the build


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| versions | n | BuildInstance | true | true |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| build | 1 | BuildInstance |  |  |  |
| builds | n | Environment | false | false |  |





## Methods


<h2>Method Details</h2>
    

