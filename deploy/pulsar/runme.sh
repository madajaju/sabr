#!/bin/sh -x

#
# Copyright 2024 (c) Intel Corp
#
# Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
#
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
