/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

const _ships = {};
const _checker = {};

module.exports = {
    name: 'nocontact',
    outputs: {
        AISNoContact: {},
    },
    inputs: {
        AISShip: {},
    },
    transforms: {
        noContact: {
            inputs: ['AISShip'],
            outputs: ['AISNoContact'],
            fn: (data, props) => {
                _calculateNoContact(data.message);
                return {data: {message: null}, properties: props};
            }
        }
    },
    applications: {
        noContactChecker: (bundle, parameters) => {
            // Add the bundle to the global name space so we can send data out.
            // The _checker has the timeout parameter and the bundle to communication back to.
            _checker.bundle = bundle;
            _checker.timeout = parameters.timeout;
            return;
        }
    },
}

function _calculateNoContact(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    if (!_checker) {
        return;
    }
    if (!_ships.hasOwnProperty(aisItem.MMSI)) {
        let timeOutID = setTimeout(_sendNoContact, _checker.timeout, aisItem);
        _ships[aisItem.MMSI] = {
            timeout: timeOutID,
            data: {
                lastTime: new Date(),
                timeout: timeOutID,
                MMSI: aisItem.MMSI,
                VesselName: aisItem.VesselName,
                IMO: aisItem.IMO,
                CallSign: aisItem.CallSign,
                VesselType: aisItem.VesselType,
                Length: aisItem.Length,
                Width: aisItem.Width,
                Draft: aisItem.Draft,
                Cargo: aisItem.Cargo,
                TransceiverClass: aisItem.TransceiverClass,
                location: [{
                    BaseDateTime: aisItem.BaseDateTime,
                    LAT: aisItem.LAT,
                    LONG: aisItem.LONG,
                    SOG: aisItem.SOG,
                    COG: aisItem.COG,
                    Heading: aisItem.Heading,
                    Status: aisItem.Status,
                }]
            }
        };
    } else {
        clearTimeout(_ships[aisItem.MMSI].timeout);
        let timeOutID = setTimeout(_sendNoContact, _checker.timeout, _ships[aisItem.MMSI].data);
        _ships[aisItem.MMSI].timeout = timeOutID;
        _ships[aisItem.MMSI].lastTime = new Date();
    }
}

function _sendNoContact(message) {
    if (!_checker.bundle) {
        return;
    }
    for (let oname in _checker.bundle.outputs) {
        let output = _checker.bundle.outputs[oname];
        if (output) {
            output.send({data: {message: message}, properties: {parent: 'AIS No Contact'}});
        }
    }
}
