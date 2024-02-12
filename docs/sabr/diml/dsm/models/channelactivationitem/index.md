---
layout: default
title: Class ChannelActivationItem
permalink: class-ChannelActivationItem
parent: Classes
---

# ChannelActivationItem

This is an channel activation item used in the ChannelActivationPolicy

![Logical Diagram](./logical.png)

## Attributes

* name:string - name of the channel activation item
* priority:number - prioritization number
* activated:boolean - channel is activated


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| channel | 1 | DataChannel | false | false |  |
| parent | 1 | ChannelActivationPolicy |  |  |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| channels | n | ChannelActivationPolicy | true | true |  |





## Methods


<h2>Method Details</h2>
    

