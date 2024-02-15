---
layout: default
title: Class BuildInstance
permalink: class-BuildInstance
parent: Classes
---

# BuildInstance

Instance of a build. Another way to think of this is another version of the same build.

![Logical Diagram](./logical.png)

## Attributes

* version:string - Version of the Build


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| build | 1 | Build |  |  |  |
| runs | n | BuildRun | true | true |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| versions | n | Build | true | true |  |
| build | 1 | BuildRun | false |  |  |





## Methods


<h2>Method Details</h2>
    

