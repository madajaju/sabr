const fs = require('fs');

const _items = {};
const _TIMEINTERVAL = 3 * 60 * 1000; // Three minutes
let index = 0;

module.exports = {
    name: 'usv',
    outputs: {
        AISUSV: {}, // Broadcast what it found.
        AISShip: {}, // Broadcast what it found.
    },
    transforms: {
        mainTransform: {
            inputs: [],
            outputs: ["AISUSV", "AISShip" ],
            fn: (data, props) => {
                return {data: {message: data.message}, properties: props};
            }
        }
    },
    applications: {
        usvSim: (bundle, parameters) => {
		console.log("USV Simulator running:", bundle.outputs);
	   // get the ais data for the USV
	   // push it to AISShip stream
	   readAISFile();
	   // get the USV data
	   // push it to the AISUSV stream
	   readHitsFile();
           let sortedKeys = Object.keys(_items).sort((a, b) => {
                   return a - b;
           });
           let current = sortedKeys.pop();
           transmit(sortedKeys, current, bundle);
	}
    }
}

const readAISFile = () => {
	let filename =  "ais.csv";
	if (fs.existsSync(filename)) {
                let str = fs.readFileSync(filename, 'utf-8');
                str.split(/\n/).forEach((line) => {
                    let [MMSI, BaseDateTime, LAT, LONG, SOG, COG, Heading, VesselName, IMO, CallSign, VesselType, Status, Length, Width, Draft, Cargo, TransceiverClass] = line.split(/,/);
                    let jsonline = {
                        MMSI: MMSI,
                        BaseDateTime: new Date(BaseDateTime),
                        LAT: LAT,
                        LONG: LONG,
                        SOG: SOG,
                        COG: COG,
                        Heading: Heading,
                        VesselName: VesselName,
                        IMO: IMO,
                        CallSign: CallSign,
                        VesselType: VesselType,
                        Status: Status,
                        Length: Length,
                        Width: Width,
                        Draft: Draft,
                        Cargo: Cargo,
                        TransceiverClass: TransceiverClass
                    }
		    let timeKey = Math.floor(Number(jsonline.BaseDateTime)/ _TIMEINTERVAL);
			if(!_items.hasOwnProperty(timeKey)) {
			    _items[timeKey] = { };
			}
			_items[timeKey].ais = jsonline;
                });
	}
}
const readHitsFile = () => {
	let filename =  "hits.csv";
	if (fs.existsSync(filename)) {
                let str = fs.readFileSync(filename, 'utf-8');
                str.split(/\n/).forEach((line) => {
                    let [MMSI, BaseDateTime, LAT, LONG, SOG, COG, Heading, VesselType, Length, Width] = line.split(/,/);
                    let jsonline = {
                        MMSI: MMSI,
                        BaseDateTime: new Date(BaseDateTime),
                        LAT: LAT,
                        LONG: LONG,
                        SOG: SOG,
                        COG: COG,
                        Heading: Heading,
                        VesselType: VesselType,
                        Length: Length,
                        Width: Width,
                    }
		    let timeKey = Math.floor(Number(jsonline.BaseDateTime)/ _TIMEINTERVAL);
			if(!_items.hasOwnProperty(timeKey)) {
			    _items[timeKey] = { hits:[] };
			}
			if(!_items[timeKey].hasOwnProperty('hits')) {
				_items[timeKey].hits = [];
			}	
			_items[timeKey].hits.push(jsonline);
                });
	}
}


function transmit(sortedTransmit, current, bundle) {
    if (sortedTransmit.length > 0) {
        const next = sortedTransmit.pop();
        // const difference = current.BaseDateTime - next.BaseDateTime;
        // Set the time delay for speed up in simulation.
        // const timedelay = Math.abs(difference) / 50 || 1;
	const timedelay = 0;
	// send the ais data
        sendMessage(bundle, 'AISShip', _items[current].ais);
	// send each of the hits.
	for(let i in _items[current].hits) {
		sendMessage(bundle, 'AISUSV', _items[current].hits[i]);
	}
        setTimeout(transmit, timedelay, sortedTransmit, next, bundle);
        return 0;
    } else {
	// end gracefully
	process.exit(0);
	return 1;
    }
}

function sendMessage(bundle, datastream, message) {
	index++;
	if(index % 100 === 0) { console.log(index); }
   for (let oname in bundle.outputs) {
	let output = bundle.outputs[oname];
        if (output && output.name.includes(datastream)) {
            output.send({data: {message: message}, properties: {parent: 'USV Simulator'}});
        }
    }
}

