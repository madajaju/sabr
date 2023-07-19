#!/bin/sh -x

#
# Copyright 2023 Intel Corporation.
# This software and the related documents are Intel copyrighted materials, and your use of them is governed by
# the express license under which they were provided to you (License). Unless the License provides otherwise,
# you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
# without  Intel's prior written permission. This software and the related documents are provided as is, with no
# express or implied warranties, other than those that are expressly stated in the License.
#
#

cd /pulsar

echo "Sleeping for 3 minutes"
sleep 180
echo "Running First Client to see if it is up and running.";

bin/pulsar-client --url $PULSAR_URL produce myTopic -num-product 100 --messages "Realtime A Message"

echo "Creating streams and channels."
bin/pulsar-admin --admin-url $PULSAR_ADMIN tenants list
bin/pulsar-admin --admin-url $PULSAR_ADMIN tenants create myTenant
bin/pulsar-admin --admin-url $PULSAR_ADMIN namespaces create MyTenant/MyStreamA
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamA/realtime
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamA/history
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamA/summary
bin/pulsar-admin --admin-url $PULSAR_ADMIN namespaces create MyTenant/MyStreamB
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamB/realtime
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamB/history
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamB/summary
bin/pulsar-admin --admin-url $PULSAR_ADMIN namespaces create MyTenant/MyStreamC
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamC/realtime
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamC/history
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamC/summary
bin/pulsar-admin --admin-url $PULSAR_ADMIN namespaces create MyTenant/MyStreamD
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamD/realtime
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamD/history
bin/pulsar-admin --admin-url $PULSAR_ADMIN topics create persistent://MyTenant/MyStreamD/summary


echo "Setting up the consumers"
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamA/realtime --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamA/history --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamA/summary --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamB/realtime --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamB/history --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamB/summary --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamC/realtime --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamC/history --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamC/summary --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamD/realtime --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamD/history --num-message 0 --subscription-name Exclusive &
bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamD/summary --num-message 0 --subscription-name Exclusive &


echo "Sending messages"
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamA/realtime -num-product 100 --messages "Realtime A Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamB/realtime -num-product 100 --messages "Realtime B Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamC/realtime -num-product 100 --messages "Realtime C Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamD/realtime -num-product 100 --messages "Realtime D Message" &

bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamA/summary -num-product 1 --messages "Summary A Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamB/summary -num-product 1 --messages "Summary B Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamC/summary -num-product 1 --messages "Summary C Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamD/summary -num-product 1 --messages "Summary D Message" &

bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamA/history -num-product 50 --messages "History A Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamB/history -num-product 50 --messages "History B Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamC/history -num-product 50 --messages "History C Message" &
bin/pulsar-client --url $PULSAR_URL produce presistent://MyTenant/MyStreamD/history -num-product 50 --messages "History D Message" &

bin/pulsar-client --url $PULSAR_URL consume persistent://MyTenant/MyStreamD/summary --num-message 0 --subscription-name Exclusive
