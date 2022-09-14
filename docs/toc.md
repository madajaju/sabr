---
layout: default
title: TOC
permalink: toc
---
Version 0.1.5 

## sabr Overview
* [sabr](./sabr/index.md)

## Use Case View
### Actors
* [All Actors](actors)
* [ApplicationDeveloper](actor-applicationdeveloper)
* [DataAnalyst](actor-analyst)
* [DataEngineer](actor-dataengineer)
* [DataScientist](actor-datascientist)
* [DataSteward](actor-datasteward)
* [DevOpsEngineer](actor-devops)
* [ITOperations](actor-itops)
* [SecurityOperator](actor-secops)
* [TacticalOperator](actor-tacticaloperator)


### Use Cases
* [Deploy Capability](usecase-DeployCapability)
      * [Deploy Capability Release](usecase-DeployCapability#DeployCapabilityRelease)
      * [Develop Capability](usecase-DevelopCapability)
      * [Build Capability](usecase-DevelopCapability#BuildCapability)
          * [Create Capability](usecase-DevelopCapability#CreateCapability)
          * [Release Capability](usecase-DevelopCapability#ReleaseCapability)
          * [Test Capability](usecase-DevelopCapability#TestCapability)
      * [Integrate Learning](usecase-IntegrateLearning)
  * [Manage AI Model](usecase-ManageAIModel)
  * [Manage Application](usecase-ManageApplication)
      * [Create Application](usecase-ManageApplication#CreateApplication)
          * [Destroy Application](usecase-ManageApplication#DestroyApplication)
          * [Update Application](usecase-ManageApplication#UpdateApplication)
      * [Manage Capabilities](usecase-ManageCapabilities)
  * [Manage Policies](usecase-ManagePolicies)
  * [Manage SABR](usecase-ManageSABR)
      * [Create SAB](usecase-ManageSABR#BuildSAB)
          * [Create SABR](usecase-ManageSABR#CreateSABR)
          * [Deploy SABR](usecase-ManageSABR#DeploySABR)
          * [Deploy SABR two](usecase-ManageSABR#DeploySABR2)
          * [Deploy SABR three](usecase-ManageSABR#DeploySABR3)
          * [Deploy SABR four](usecase-ManageSABR#DeploySABR4)
      * [Manage Security](usecase-ManageSecurity)
  * [Provide Digital Assistance](usecase-ProvideDigitalAssistance)
  * [Provide Mission Insight](usecase-ProvideMissionInsight)
  * [Remove Capability](usecase-RemoveCapability)
  * [Update Capability](usecase-UpdateCapability)
      * [Add a SABR to the Capability](usecase-UpdateCapability#AddaSABRtotheCapability)
          * [Add SABRs to the Capability](usecase-UpdateCapability#AddSABRstotheCapability)
          * [Remove a SABR from the Capability](usecase-UpdateCapability#RemoveaSABRfromtheCapability)
          * [Remove multiple SABRs from the Capability](usecase-UpdateCapability#RemovemultipleSABRsfromtheCapability)
          * [Update Configuration of the Capability](usecase-UpdateCapability#UpdateConfigurationoftheCapability)
          * [Update Policies of the Capability](usecase-UpdateCapability#UpdatePoliciesoftheCapability)
          * [Update SABRs of the Capability](usecase-UpdateCapability#UpdateSABRsoftheCapability)
      
* [Integrate Learning](usecase-IntegrateLearning)
  * [Manage Application](usecase-ManageApplication)
  * [Deploy Capability](usecase-DeployCapability)
  * [Develop Capability](usecase-DevelopCapability)
  * [Remove Capability](usecase-RemoveCapability)
  * [Update Capability](usecase-UpdateCapability)
  * [Manage SABR](usecase-ManageSABR)
  * [Manage AI Model](usecase-ManageAIModel)
  * [Manage Capabilities](usecase-ManageCapabilities)
  * [Manage Policies](usecase-ManagePolicies)
  * [Manage Security](usecase-ManageSecurity)
  * [Provide Digital Assistance](usecase-ProvideDigitalAssistance)
  * [Provide Mission Insight](usecase-ProvideMissionInsight)
  
* 
## Logical View

### Packages 
* [Application Management Layer](package--sabr-aml)
  * [Application Manager](package--sabr-aml-am)
  * [Capability Manager](package--sabr-aml-cm)
  * [Learning Corpus](package--sabr-aml-lc)
* [Common Physical Layer](package--sabr-cpl)
* [Distributed Information Management Layer](package--sabr-diml)
  * [Data Stream Manager](package--sabr-diml-dsm)
  * [Sentient Agent Bundle Manager](package--sabr-diml-sabm)
* [Identity Aspect](package--sabr-ia)
* [Security Aspect](package--sabr-sa)
* [Service Management Layer](package--sabr-sml)
  * [Service Orchestrator](package--sabr-sml-so)
* [Software Defined Infrastructure](package--sabr-sdi)

   
### Classes
* [AIModel](class-AIModel)
* [Application](class-Application)
* [ApplicationInstance](class-ApplicationInstance)
* [Capability](class-Capability)
* [CapabilityInstance](class-CapabilityInstance)
* [DataChannel](class-DataChannel)
* [DataChannelInstance](class-DataChannelInstance)
* [DataStream](class-DataStream)
* [DataStreamInstance](class-DataStreamInstance)
* [DataTransform](class-DataTransform)
* [DataTransformInstance](class-DataTransformInstance)
* [DockerProvisioner](class-DockerProvisioner)
* [InputChannelInstance](class-InputChannelInstance)
* [InputStreamInstance](class-InputStreamInstance)
* [KeyStore](class-KeyStore)
* [OutputChannelInstance](class-OutputChannelInstance)
* [OutputStreamInstance](class-OutputStreamInstance)
* [ProcessProvisioner](class-ProcessProvisioner)
* [Provisioner](class-Provisioner)
* [SABundle](class-SABundle)
* [SABundleInstance](class-SABundleInstance)
* [SecureVault](class-SecureVault)
* [SecurityKey](class-SecurityKey)
* [Service](class-Service)
* [ServiceInstance](class-ServiceInstance)
* [Stack](class-Stack)
* [StackInstance](class-StackInstance)
* [StreamPolicy](class-StreamPolicy)


## Process View

## Implementation View

### External Dependencies

External Dependencies of the application 

### Container Images

The architecture utilizes a micro-service design pattern for the deployment architecture. The following is a list of 
the container images for the deployment of the solution.


* [sabr_aml_am_web](image-sabr_aml_am_web)

* [sabr_aml_cm_web](image-sabr_aml_cm_web)

* [sabr_aml_lc_web](image-sabr_aml_lc_web)

* [sabr_cpl_web](image-sabr_cpl_web)

* [sabr_diml_dsm:standalone](image-sabr_diml_dsm:standalone)

* [sabr_diml_web](image-sabr_diml_web)

* [sabr_diml_sabm_web](image-sabr_diml_sabm_web)

* [sabr_diml_sabm_sabr](image-sabr_diml_sabm_sabr)

* [sabr_ia_web](image-sabr_ia_web)

* [sabr_sa_web](image-sabr_sa_web)

* [sabr_sml_web](image-sabr_sml_web)

* [sabr_sml_so_web](image-sabr_sml_so_web)

* [sabr_sdi_web](image-sabr_sdi_web)

* [sabr_web](image-sabr_web)

* [sabr_pulsar:standalone](image-sabr_pulsar:standalone)

* [sabr_doc](image-sabr_doc)

* [node:alpine](image-node:alpine)

* [apachepulsar/pulsar-all](image-apachepulsar/pulsar-all)

* [jekyll/jekyll](image-jekyll/jekyll)


## Deployment View

### Environments

### Services
