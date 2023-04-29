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
