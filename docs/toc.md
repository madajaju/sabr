---
layout: default
title: TOC
permalink: toc
nav_order: 8
---
Version 0.1.5 

## sabr Overview
* [sabr](./sabr/index.md)

## Use Case View
### Actors
* [All Actors](actors)
* [Actor](actor-actor)
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
* [Manage Environments](usecase-ManageEnvironments)
  * [Create Build Environment](usecase-ManageEnvironments#CreateBuildEnvironment)
* [Manage Policies](usecase-ManagePolicies)
  * [Create Policy](usecase-ManagePolicies#CreatePolicy)
* [Manage SABR](usecase-ManageSABR)
  * [Build SAB](usecase-ManageSABR#BuildSAB)
  * [Create SABR](usecase-ManageSABR#CreateSABR)
  * [Deploy SABR](usecase-ManageSABR#DeploySABR)
  * [Deploy SABR two](usecase-ManageSABR#DeploySABR2)
  * [Deploy SABR three](usecase-ManageSABR#DeploySABR3)
  * [Deploy SABR four](usecase-ManageSABR#DeploySABR4)
* [Manage Security](usecase-ManageSecurity)
* [Provide Digital Assistance](usecase-ProvideDigitalAssistance)
* [Provide Mission Insight](usecase-ProvideMissionInsight)
* [Remove Capability](usecase-RemoveCapability)
* [Ships](usecase-Ships)
  * [AIS No Contact](usecase-Ships#AISNoContact)
  * [AIS One](usecase-Ships#AISOne)
  * [Build AIS SAB](usecase-Ships#AISSABR)
  * [USV One Instance](usecase-Ships#USVOne)
* [Update Capability](usecase-UpdateCapability)
  * [Add a SABR to the Capability](usecase-UpdateCapability#AddaSABRtotheCapability)
  * [Add SABRs to the Capability](usecase-UpdateCapability#AddSABRstotheCapability)
  * [Remove a SABR from the Capability](usecase-UpdateCapability#RemoveaSABRfromtheCapability)
  * [Remove multiple SABRs from the Capability](usecase-UpdateCapability#RemovemultipleSABRsfromtheCapability)
  * [Update Configuration of the Capability](usecase-UpdateCapability#UpdateConfigurationoftheCapability)
  * [Update Policies of the Capability](usecase-UpdateCapability#UpdatePoliciesoftheCapability)
  * [Update SABRs of the Capability](usecase-UpdateCapability#UpdateSABRsoftheCapability)

## Logical View

### Packages 
* [Application Management Layer](package--sabr-aml)
  * [Application Manager](package--sabr-aml-am)
  * [Capability Manager](package--sabr-aml-cm)
  * [DevSecOpsManager](package--sabr-aml-dsom)
  * [Learning Corpus](package--sabr-aml-lc)
* [Common Physical Layer](package--sabr-cpl)
* [Distributed Information Management Layer](package--sabr-diml)
  * [Data Stream Manager](package--sabr-diml-dsm)
  * [Sentient Agent Bundle Manager](package--sabr-diml-sabm)
* [Identity Aspect](package--sabr-ia)
* [Security Aspect](package--sabr-sa)
  * [Edge Security Controller](package--sabr-sa-esc)
  * [Key Manager](package--sabr-sa-km)
* [Service Management Layer](package--sabr-sml)
  * [Service Orchestrator](package--sabr-sml-so)
* [Software Defined Infrastructure](package--sabr-sdi)

   
### Classes
* [AIModel](class-AIModel)
* [AdminDataStream](class-AdminDataStream)
* [AdminTransform](class-AdminTransform)
* [Application](class-Application)
* [ApplicationInstance](class-ApplicationInstance)
* [Capability](class-Capability)
* [CapabilityInstance](class-CapabilityInstance)
* [ChannelActivationItem](class-ChannelActivationItem)
* [ChannelActivationPolicy](class-ChannelActivationPolicy)
* [ChannelCreationPolicy](class-ChannelCreationPolicy)
* [Credential](class-Credential)
* [DataChannel](class-DataChannel)
* [DataChannelInstance](class-DataChannelInstance)
* [DataStream](class-DataStream)
* [DataStreamInstance](class-DataStreamInstance)
* [DataTransform](class-DataTransform)
* [DataTransformInstance](class-DataTransformInstance)
* [DockerProvisioner](class-DockerProvisioner)
* [EncryptedVault](class-EncryptedVault)
* [Environment](class-Environment)
* [InputChannelInstance](class-InputChannelInstance)
* [InputStreamInstance](class-InputStreamInstance)
* [JWT](class-JWT)
* [KeyStore](class-KeyStore)
* [OutputChannelInstance](class-OutputChannelInstance)
* [OutputStreamInstance](class-OutputStreamInstance)
* [ProcessProvisioner](class-ProcessProvisioner)
* [Provisioner](class-Provisioner)
* [SABundle](class-SABundle)
* [SABundleBuild](class-SABundleBuild)
* [SABundleInstance](class-SABundleInstance)
* [SecureVault](class-SecureVault)
* [SecurityKey](class-SecurityKey)
* [Seed](class-Seed)
* [Service](class-Service)
* [ServiceInstance](class-ServiceInstance)
* [Stack](class-Stack)
* [StackInstance](class-StackInstance)
* [WorkingEnclave](class-WorkingEnclave)


## Process View

## Implementation View

### External Dependencies

External Dependencies of the application 

### Container Images

The architecture utilizes a micro-service design pattern for the deployment architecture. The following is a list of 
the container images for the deployment of the solution.


* [sabr_aml_am_web](image-sabr_aml_am_web)

* [sabr_aml_cm_web](image-sabr_aml_cm_web)

* [devops](image-devops)

* [sabr_aml_lc_web](image-sabr_aml_lc_web)

* [sabr_cpl_web](image-sabr_cpl_web)

* [sabr_diml_dsm:standalone](image-sabr_diml_dsm:standalone)

* [sabr_diml_web](image-sabr_diml_web)

* [sabr_diml_sabm_web](image-sabr_diml_sabm_web)

* [sabr_service](image-sabr_service)

* [sabr_registry](image-sabr_registry)

* [sabr_builder](image-sabr_builder)

* [sabr_ia_web](image-sabr_ia_web)

* [sabr_sa_web](image-sabr_sa_web)

* [sabr_sa_esc](image-sabr_sa_esc)

* [sa_km_registry](image-sa_km_registry)

* [sabr_sml_web](image-sabr_sml_web)

* [sabr_sml_so_web](image-sabr_sml_so_web)

* [sabr_sdi_web](image-sabr_sdi_web)

* [sabr_pulsar:standalone](image-sabr_pulsar:standalone)

* [sabr_doc](image-sabr_doc)

* [node:alpine](image-node:alpine)

* [apachepulsar/pulsar-all](image-apachepulsar/pulsar-all)

* [registry:2](image-registry:2)

* [docker:latest](image-docker:latest)

* [jekyll/jekyll](image-jekyll/jekyll)

## Deployment View

### Environments


* [local](environment-local)

* [dev](environment-dev)

* [test](environment-test)

* [prod](environment-prod)

### Services
* sabr_aml_am - [local](environment-local-sabr_aml_am), [dev](environment-dev-sabr_aml_am), [test](environment-test-sabr_aml_am), [prod](environment-prod-sabr_aml_am)
* sabr_aml_cm - [local](environment-local-sabr_aml_cm), [dev](environment-dev-sabr_aml_cm), [test](environment-test-sabr_aml_cm), [prod](environment-prod-sabr_aml_cm)
* sabr_aml - [local](environment-local-sabr_aml), [dev](environment-dev-sabr_aml), [test](environment-test-sabr_aml), [prod](environment-prod-sabr_aml)
* devops - [local](environment-local-devops), [dev](environment-dev-devops), [test](environment-test-devops), [prod](environment-prod-devops)
* sabr_aml_lc - [local](environment-local-sabr_aml_lc), [dev](environment-dev-sabr_aml_lc), [test](environment-test-sabr_aml_lc), [prod](environment-prod-sabr_aml_lc)
* sabr_cpl - [local](environment-local-sabr_cpl), [dev](environment-dev-sabr_cpl), [test](environment-test-sabr_cpl), [prod](environment-prod-sabr_cpl)
* sabr_diml_dsm - [local](environment-local-sabr_diml_dsm), [dev](environment-dev-sabr_diml_dsm), [test](environment-test-sabr_diml_dsm), [prod](environment-prod-sabr_diml_dsm)
* sabr_diml - [local](environment-local-sabr_diml), [dev](environment-dev-sabr_diml), [test](environment-test-sabr_diml), [prod](environment-prod-sabr_diml)
* sa_esc - [local](environment-local-sa_esc), [dev](environment-dev-sa_esc), [test](environment-test-sa_esc), [prod](environment-prod-sa_esc)
* s_km - [local](environment-local-s_km), [dev](environment-dev-s_km), [test](environment-test-s_km), [prod](environment-prod-s_km)
* sabr - [local](environment-local-sabr), [dev](environment-dev-sabr), [test](environment-test-sabr), [prod](environment-prod-sabr)
* sabr_diml_sabm - [dev](environment-dev-sabr_diml_sabm), [test](environment-test-sabr_diml_sabm), [prod](environment-prod-sabr_diml_sabm)
* sabr_ia - [dev](environment-dev-sabr_ia), [test](environment-test-sabr_ia), [prod](environment-prod-sabr_ia)
* sabr_sa - [dev](environment-dev-sabr_sa), [test](environment-test-sabr_sa), [prod](environment-prod-sabr_sa)
* sabr_sml - [dev](environment-dev-sabr_sml), [test](environment-test-sabr_sml), [prod](environment-prod-sabr_sml)
* sabr_sml_so - [dev](environment-dev-sabr_sml_so), [test](environment-test-sabr_sml_so), [prod](environment-prod-sabr_sml_so)
* sabr_sdi - [dev](environment-dev-sabr_sdi), [test](environment-test-sabr_sdi), [prod](environment-prod-sabr_sdi)
