---
layout: default
title: Class SecurityKey
permalink: class-SecurityKey
parent: Classes
---

# SecurityKey

Security Key

![Logical Diagram](./logical.png)

## Attributes

* name:string - Name of the security key
* value:string - Value of the security key.
* iv:string - IV of the Security Key.


## Associations

No associations



## Users of the Model

| Name | Cardinality | Class | Composition | Owner | Description |
| --- | --- | --- | --- | --- | --- |
| encryptionKey | 1 | DataChannel |  |  | Encryption Key for the channel |
| decryptionKey | 1 | DataChannel |  |  | Decryption Key for the channel |
| encryptionKey | 1 | DataStream |  |  | This is the encryption key for the data stream |
| decryptionKey | 1 | DataStream |  |  | This is the decryption key for the data stream |
| encryptionKey | 1 | AdminDataStream |  |  | This is the encryption key for the data stream |
| decryptionKey | 1 | AdminDataStream |  |  | This is the decryption key for the data stream |
| encryptKey | 1 | SABundleBuild | true | true |  |
| decryptKey | 1 | SABundleBuild | true | true |  |
| iv | 1 | SABundleBuild | true | true | Init Vector of the cipher |
| streams | n | EncryptedVault | true | true |  |
| keys | n | KeyStore | false | false |  |
| bootstrap | 1 | Seed | true | true |  |
| uauth | 1 | Seed | true | true |  |
| authenticationKey | 1 | WorkingEnclave | false | false |  |





## Methods
* [generateKey() - Create the security Key.](#action-generateKey)
* [generatePair() - Create the security Key.](#action-generatePair)


<h2>Method Details</h2>
    
### Action securitykey generateKey



* REST - securitykey/generateKey?name=string
* bin - securitykey generateKey --name string
* js - securitykey.generateKey({ name:string })

#### Description
Create the security Key.

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |false | Name of the SecurityKey Pair |




### Action securitykey generatePair



* REST - securitykey/generatePair?name=string
* bin - securitykey generatePair --name string
* js - securitykey.generatePair({ name:string })

#### Description
Create the security Key.

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| name | string |false | Name of the SecurityKey Pair |





