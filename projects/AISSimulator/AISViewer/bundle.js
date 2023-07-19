/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

let _ships = {};
const AEvent = require('ailtire/src/Server/AEvent');

module.exports = {
    name: 'viewer',
    inputs: {
        AISAggregate: {},
        AISNoContact: {},
    },
    transforms: {
        aggregator: {
            inputs: ['AISAggregate'],
            fn: (data, props) => {
                if(data.message) {
                    AEvent.emit("ship.moved", data.message);
                }
                return null;
            }
        },
        noContact: {
            inputs: ['AISNoContact'],
            fn: (data, props) => {
                if(data.message) {
                    AEvent.emit('ship.nocontact', data.message);
                }
                return null;
            }
        },
        shipFound: {
            inputs: ['AISUSV'],
            fn: (data, props) => {
                if(data.message) {
                    AEvent.emit('ship.found', data.message);
                }
                return null;
            }
        }
    },
    applications: {},
}
