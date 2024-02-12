---
layout: default
title: Class Seed
permalink: class-Seed
parent: Classes
---

# Seed

Seed for the SecureVault. It is created at the build of the SABR and the SecureVault. The seed is used to uniquely register and provision the SABR to the SecurityManager.

![Logical Diagram](./logical.png)

## Attributes



## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| registrationCreds | 1 | Credential | true | true |  |
| bootstrap | 1 | SecurityKey | true | true |  |
| uauth | 1 | SecurityKey | true | true |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| seed | 1 | SecureVault | true | true |  |





## Methods


<h2>Method Details</h2>
    

