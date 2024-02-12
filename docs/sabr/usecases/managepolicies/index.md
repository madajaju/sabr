---
title: Manage Policies
permalink: usecase-ManagePolicies
parent: UseCases
---
# Manage Policies

Manage Policies use case includes establishing and managing DDIL environment policies for the complete ecosystem, individual capabilities, SABRs, and applications. This use case also refers to orchestration and deployment policies.

![Activities Diagram](./Activities.png)

## Actors

* [IT Operations](actor-itops)











## Detail Scenarios

* [CreatePolicy](#scenario-CreatePolicy)



### Scenario Create Policy

Create policies for the system which include ChannelCreationPolicies and ChannelActivationPolicies

![Scenario CreatePolicy](./CreatePolicy.png)

#### Steps
1. [streampolicy create --name policy1 --file ./templates/policy1.js](#action-streampolicy create)
1. [streampolicy create --name policy2 --file ./templates/policy2.js](#action-streampolicy create)

#### Actors

* [DataEngineer](actor-dataengineer)




