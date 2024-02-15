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
    name: 'badvessel',
    outputs: {
        AISBadVessel: {},
    },
    inputs: {
        AISAgg: {},
        AISUSV: {},
    },
    transforms: {
        vesselCheck: {
            inputs: ['AISAgg', 'AISUSV'],
            outputs: ['AISBadVessel'],
            fn: (data, props) => {
		if(props.inputStream === 'AISAgg') {
			_saidTrack(data.message);
		} else if(props.inputStream === 'AISUSV') {
			_seenTrack(data.message);
		}
                return null;
            }
        }
    },
    applications: {
        vessselCheck: (bundle, parameters) => {
            // Add the bundle to the global name space so we can send data out.
            // The _checker has the timeout parameter and the bundle to communication back to.
            _checker.bundle = bundle;
            _checker.timeout = 0;
            return;
        }
    },
}

function _checkVesselType(moment) {
	if(!moment.sent) {
		if(moment.hasOwnProperty('usv') && moment.hasOwnProperty('ais')) {
			console.log("Check Moment:", moment);
			if(moment.usv.VesselType !== moment.ais.VesselType) {
				_sendVesselMismatch(ais, usv);
				moment.sent = true;
			}
		}
	}
}
function _seenTrack(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    if(!_ships.hasOwnProperty(aisItem.MMSI)) {
	_ships[aisItem.MMSI] = {};
    }
    if(_ships[aisItem.MMSI].hasOwnProperty('usv')) {
	if(_ships[aisItem.MMSI].usv.VesselType !== aisItem.VesselType) {
	    _sendVesselMismatch(_ships[aisItem.MMSI].usv, aisItem);
	    _ships[aisItem.MMSI].sent = true;
	}
    }
    _ships[aisItem.MMSI].usv = aisItem;
    _checkVesselType(_ships[aisItem.MMSI]);
}

function _saidTrack(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    if(!_ships.hasOwnProperty(aisItem.MMSI)) {
	_ships[aisItem.MMSI] = {};
    }
    if(_ships[aisItem.MMSI].hasOwnProperty('ais')) {
	if(_ships[aisItem.MMSI].ais.VesselType !== aisItem.VesselType) {
	    _sendVesselMismatch(_ships[aisItem.MMSI].ais, aisItem);
	    _ships[aisItem.MMSI].sent = true;
	}
    }
    _ships[aisItem.MMSI].ais = aisItem;
    _checkVesselType(_ships[aisItem.MMSI]);
}

function _sendVesselMismatch(ais,usv) {
    if (!_checker.bundle) {
        return;
    }
    let message = {
		ais: ais,
		usv: usv
   }
   console.log("Vessel Mismatch:", message);
    for (let oname in _checker.bundle.outputs) {
        let output = _checker.bundle.outputs[oname];
        if (output) {
            output.send({data: {message: message}, properties: {parent: 'AIS VesselMismatch'}});
        }
    }
}
