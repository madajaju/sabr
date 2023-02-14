const fs = require('fs');

module.exports = {
    name: 'usv',
    outputs: {
        AISShip: {}, // Broadcast where the USV is.
        AISUSV: {}, // Broadcast what it found.
    },
    transforms: {
        mainTransform: {
            inputs: [],
            outputs: ["AISShip", "AISUSV"],
            fn: (data, props) => {
                return {data: {message: data.message}, properties: props};
            }
        }
    },
    applications: {
        usvSim: (bundle, parameters) => {
            let filenames = parameters.sourceFiles.split(':');
            console.log("FileNames:", filenames);
            let items = [];
            filenames.forEach( (file) => {
                let filename = path.resolve(file);
                if (fs.existsSync(filename)) {
                    let str = fs.readFileSync(filename).toString('utf-8');
                    str.split(/\n/).forEach((line) => {
                        let [MMSI, BaseDateTime, LAT, LONG, SOG, COG, Heading, VesselName, IMO, CallSign, VesselType, Status, Length, Width, Draft, Cargo, TransceiverClass] = line.split(/,/);
                        let jsonline = {
                            Source: `USV-${parameters.MMSI}`,
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
                } else {
                    console.error("Could not find the file:", file);
                }
            });
            let sortedTransmit = items.sort((a, b) => {
                return b.BaseDateTime - a.BaseDateTime;
            });
            let current = sortedTransmit.pop();
            transmit(sortedTransmit, current, bundle);
        }
    }
}

function transmit(sortedTransmit, current, bundle) {
    if (sortedTransmit.length > 0) {
        const next = sortedTransmit.pop();
        const difference = current.BaseDateTime - next.BaseDateTime;
        // Set the time delay for speed up in simulation.
        const timedelay = Math.abs(difference) / 50 || 1;
        sendMessage(bundle, current);
        setTimeout(transmit, timedelay, sortedTransmit, next, bundle);
        return 1;
    } else {
        return 0;
    }
}

function sendMessage(bundle, message) {
    for (let oname in bundle.outputs) {
        let output = bundle.outputs[oname];
        if (output) {
            output.send({data: {message: message}, properties: {parent: 'Ship Simulator'}});
        }
    }
}
