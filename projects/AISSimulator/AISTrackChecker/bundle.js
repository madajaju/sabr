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
const _TIMEINTERVAL = 20 * 60 * 1000; // 7 minutes
const _DISTANCE_TOLERANCE = 50 * (1 / 114000); // 50 meters

module.exports = {
    name: 'badtrack',
    outputs: {
        AISBadTrack: {},
    },
    inputs: {
        AISAgg: {},
        AISUSV: {},
    },
    transforms: {
        noContact: {
            inputs: ['AISAgg', 'AISUSV'],
            outputs: ['AISBadTrack'],
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
        badtrack: (bundle, parameters) => {
            // Add the bundle to the global name space so we can send data out.
            // The _checker has the timeout parameter and the bundle to communication back to.
            _checker.bundle = bundle;
            _checker.timeout = 0;
            return;
        }
    },
}

function _checkTrack(moment) {
	if(moment.hasOwnProperty('usv') && moment.hasOwnProperty('ais')) {
		for(let i in moment.usv) {
			let usv = moment.usv[i];
			for(let j in moment.ais) {
				let ais = moment.ais[j];
				// If the time is within one minute 60,000 milliseconds
				if(Math.abs(ais.BaseDateTime - usv.BaseDateTime) < 60000) {
					if(Math.abs(usv.LAT - ais.LAT) > _DISTANCE_TOLERANCE || Math.abs(usv.LONG - usv.LONG) > _DISTANCE_TOLERANCE) {
						_sendTrackMismatch(ais, usv);
					}
				}
			}
		}
		moment = {};
	}
}
function _saidTrack(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    let baseTime = new Date(aisItem.BaseDateTime);
    let timeKey = Math.floor(baseTime /( _TIMEINTERVAL / 2));
    if(!_ships.hasOwnProperty(timeKey)) {
	_ships[timeKey] = {};
    }
    if(!_ships[timeKey].hasOwnProperty(aisItem.MMSI)) {
	_ships[timeKey][aisItem.MMSI] = {};
    }
    if(!_ships[timeKey][aisItem.MMSI].hasOwnProperty('ais')) {
	_ships[timeKey][aisItem.MMSI].ais = [];
    }
    _ships[timeKey][aisItem.MMSI].ais.push({BaseDateTime: baseTime, LAT: Number(aisItem.LAT), LONG: Number(aisItem.LONG), SOG: aisItem.SOG, COG: aisItem.COG});
    _checkTrack(_ships[timeKey][aisItem.MMSI]);
}

function _seenTrack(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    let baseTime = new Date(aisItem.BaseDateTime);
    let timeKey = Math.floor(baseTime /( _TIMEINTERVAL / 2));
    if(!_ships.hasOwnProperty(timeKey)) {
	_ships[timeKey] = {};
    }
    if(!_ships[timeKey].hasOwnProperty(aisItem.MMSI)) {
	_ships[timeKey][aisItem.MMSI] = {};
    }
    if(!_ships[timeKey][aisItem.MMSI].hasOwnProperty('usv')) {
	_ships[timeKey][aisItem.MMSI].usv = [];
    }
    _ships[timeKey][aisItem.MMSI].usv.push({BaseDateTime: baseTime, LAT: Number(aisItem.LAT), LONG: Number(aisItem.LONG), SOG: aisItem.SOG, COG: aisItem.COG});
    _checkTrack(_ships[timeKey][aisItem.MMSI]);
}

function _sendTrackMismatch(ais,usv) {
    if (!_checker.bundle) {
        return;
    }
	let message = {
		ais: ais,
		usv: usv
	}
    for (let oname in _checker.bundle.outputs) {
        let output = _checker.bundle.outputs[oname];
        if (output) {
            output.send({data: {message: message}, properties: {parent: 'AIS TrackMismatch'}});
        }
    }
}
