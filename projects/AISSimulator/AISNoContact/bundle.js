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
const _TOOLONG = 20 * 60 * 1000; // 20 minutes

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
            _checker.timeout = 0;
            return;
        }
    },
}

function _calculateNoContact(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    if (!_ships.hasOwnProperty(aisItem.MMSI)) {
        _ships[aisItem.MMSI] = {
            data: {
                MMSI: aisItem.MMSI,
                VesselName: aisItem.VesselName,
	        BaseDateTime: aisItem.BaseDateTime,
                LAT: aisItem.LAT,
                LONG: aisItem.LONG,
                SOG: aisItem.SOG,
                COG: aisItem.COG,
                Heading: aisItem.Heading,
                Status: aisItem.Status,
           }
       };
    } else {
	let ship = _ships[aisItem.MMSI].data;
	let newTime = new Date(aisItem.BaseDateTime);
	let oldTime = new Date(ship.BaseDateTime);

	if(Math.abs(newTime - oldTime) > _TOOLONG) {
		_ships[aisItem.MMSI].data.BaseDateTime = aisItem.BaseDateTime;
		_sendNoContact(aisItem);
	} else {
		_ships[aisItem.MMSI].data.BaseDateTime = aisItem.BaseDateTime;
	}

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
