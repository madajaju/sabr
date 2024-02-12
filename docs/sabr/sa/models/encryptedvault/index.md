---
layout: default
title: Class EncryptedVault
permalink: class-EncryptedVault
parent: Classes
---

# EncryptedVault

This is the encrypted part of the SecureVault and contains DataStreamIDs used to create unique mixed encryption and decryption keys.

![Logical Diagram](./logical.png)

## Attributes

* encryptedDate:string - Data Encrypted with all of the secrets and keys


## Associations

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| streams | n | SecurityKey | true | true |  |



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| vault | 1 | SecureVault | true | true |  |





## Methods
* [encrypt() - Encrypt a the Encrypted Vault](#action-encrypt)


<h2>Method Details</h2>
    
### Action encryptedvault encrypt



* REST - encryptedvault/encrypt?key=SecurityKey&amp;iv=SecurityKey
* bin - encryptedvault encrypt --key SecurityKey --iv SecurityKey
* js - encryptedvault.encrypt({ key:SecurityKey,iv:SecurityKey })

#### Description
Encrypt a the Encrypted Vault

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| key | SecurityKey |true | The encryption key for the store. |
| iv | SecurityKey |true | The encryption key for the store. |





