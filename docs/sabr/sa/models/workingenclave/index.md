---
layout: default
title: Class WorkingEnclave
permalink: class-WorkingEnclave
parent: Classes
---

# WorkingEnclave

This is the working enclave of the SecureVault. This contains all of the temporary objects and strings required to get keys from the SecurityManager

![Logical Diagram](./logical.png)

## Attributes

* deviceUID:string - This is the unique ID of the SecureVault&#39;s SABR


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| token | 1 | JWT | false | false |  |
| authenticationKey | 1 | SecurityKey | false | false |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| enclave | 1 | SecureVault | false | true |  |





## Methods


<h2>Method Details</h2>
    

