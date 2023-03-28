const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'ship',
    outputs: {
        AISShip: {},
    },
    transforms: {
        mainTransform: {
            inputs: [],
            outputs: ['AISShip'],
            fn: (data, props) => {
                return {data: {message: data.message}, properties: props};
            }
        }
    },
    applications: {
        simulator: (bundle, parameters) => {
            console.log("Parameters:", parameters);
            let filename = path.resolve(parameters.sourceFile);
            let items = [];
            if (fs.existsSync(filename)) {
                let str = fs.readFileSync(filename).toString('utf-8');
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
                    items.push(jsonline);
                });
                let sortedTransmit = items.sort( (a,b) => {
                    return b.BaseDateTime - a.BaseDateTime;
                });
                let current = sortedTransmit.pop();
                transmit(sortedTransmit, current, bundle);
            } else {
                console.error("Could not find the filename:", filename);
                return;
            }
        }
    },
}
let index = 0;

function transmit(sortedTransmit, current, bundle) {
    if(sortedTransmit.length > 0 ) {
        const next = sortedTransmit.pop();
        const difference = current.BaseDateTime - next.BaseDateTime;
        // Set the time delay for speed up in simulation.
        // const timedelay = Math.abs(difference) / 50 || 1;
	const timedelay = 0; // Run immediately
        sendMessage(bundle, current);
        setTimeout(transmit, timedelay, sortedTransmit, next, bundle);
        return 1;
    } else {
	process.exit(0);
        return 0;
    }
}
function sendMessage(bundle, message) {
	index++;
	if(index % 1000 === 0) { console.log(index); }
    for (let oname in bundle.outputs) {
        let output = bundle.outputs[oname];
        if (output) {
            output.send({data: {message: message}, properties: {parent: 'Ship Simulator'}});
        }
    }
}
