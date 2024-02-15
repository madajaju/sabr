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
    name: 'usvtrack',
    outputs: {
        USVPhantomShip: {},
    },
    inputs: {
        AISAgg: {},
        AISUSV: {},
    },
    transforms: {
        usvtrackchecker: {
            inputs: ['AISAgg', 'AISUSV'],
            outputs: ['USVPhantomShip'],
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
        usvtrack: (bundle, parameters) => {
            // Add the bundle to the global name space so we can send data out.
            // The _checker has the timeout parameter and the bundle to communication back to.
            _checker.bundle = bundle;
            _checker.timeout = 0;
            return;
        }
    },
}

function _checkTrack(ships, timeKey, locKey) {
	let moment = ships[timeKey][locKey];

	if(moment.hasOwnProperty('usv') && moment.hasOwnProperty('ais')) {
		let usvShips = moment.usv.length;
		let aiShips = moment.ais.length;
		if(usvShips !== aisShips) {
			_sendPhatom(moment.usv[0]);
		}
		ships[timeKey][locKey] = {};
	}
	let tkeys = Object.keys(ships);
	for(let i in tkeys) {
		let tkey = tkeys[i];
		if(tkey < timeKey - 3) {
			for(let lkey in ships[tkey]) {
				let moment = ships[tkey][lkey];
				if(moment.hasOwnProperty('usv') && moment.hasOwnProperty('ais')) {
					let usvShips = moment.usv.length;
					let aiShips = moment.ais.length;
					if(usvShips !== aisShips) {
						_sendPhatom(moment.usv, "Wrong Number");
					}
					ships[tkey][lkey] = {};
				} else if(moment.hasOwnProperty('usv')) {
					_sendPhantom(moment.usv, "Phantom");
					ships[tkey][lkey] = {};
				} else if(moment.hasOwnProperty('ais')) {
					// AIS data with no USV report
					_sendPhantom(moment.ais, "Ghost");
					ships[tkey][lkey] = {};
				}
			}
			ships[tkey] = {};
		}
	}
}
function _saidTrack(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    let baseTime = new Date(aisItem.BaseDateTime);
    let timeKey = Math.floor(baseTime /( _TIMEINTERVAL / 2));
    let location = {
	lat: Math.floor(Number(aisItem.LAT) / _DISTANCE_TOLERANCE),
	lng: Math.floor(Number(aisItem.LONG) / _DISTANCE_TOLERANCE)
    }
    let locKey = location.lat + "_" + location.lng;
    if(!_ships.hasOwnProperty(timeKey)) {
	_ships[timeKey] = {};
    }
    if(!_ships[timeKey].hasOwnProperty(locKey)) {
	_ships[timeKey][locKey] = {};
    }
    if(!_ships[timeKey][locKey].hasOwnProperty('ais')) {
	_ships[timeKey][locKey].ais = [];
    }
    _ships[timeKey][locKey].ais.push({BaseDateTime: baseTime, LAT: Number(aisItem.LAT), LONG: Number(aisItem.LONG), SOG: aisItem.SOG, COG: aisItem.COG});
    _checkTrack(_ships,timeKey,locKey);
}

function _seenTrack(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    let baseTime = new Date(aisItem.BaseDateTime);
    let timeKey = Math.floor(baseTime /( _TIMEINTERVAL / 2));
    let location = {
	lat: Math.floor(Number(aisItem.LAT) / _DISTANCE_TOLERANCE),
	lng: Math.floor(Number(aisItem.LONG) / _DISTANCE_TOLERANCE)
    }
    let locKey = location.lat + "_" + location.lng;
    if(!_ships.hasOwnProperty(timeKey)) {
	_ships[timeKey] = {};
    }
    if(!_ships[timeKey].hasOwnProperty(locKey)) {
	_ships[timeKey][locKey] = {};
    }
    if(!_ships[timeKey][locKey].hasOwnProperty('usv')) {
	_ships[timeKey][locKey].usv = [];
    }
    _ships[timeKey][locKey].usv.push({BaseDateTime: baseTime, LAT: Number(aisItem.LAT), LONG: Number(aisItem.LONG), SOG: aisItem.SOG, COG: aisItem.COG});
    _checkTrack(_ships,timeKey,locKey);
}

function _sendPhantom(usv, type) {
    if (!_checker.bundle) {
        return;
    }
    let message = usv;
	console.log("Message Send: ", message, type);
    for (let oname in _checker.bundle.outputs) {
        let output = _checker.bundle.outputs[oname];
        if (output) {
            output.send({data: {message: message}, properties: {parent: 'AIS TrackMismatch'}});
        }
    }
}
