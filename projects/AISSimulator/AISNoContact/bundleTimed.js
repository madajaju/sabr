

/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
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
