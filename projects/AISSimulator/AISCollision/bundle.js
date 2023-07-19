/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

module.exports = {
    name: 'ship',
    outputs: {
        AISWatcher: {},
    },
    transforms: {
        mainTransform: {
            inputs: [ 'AISAggregate'],
            outputs: ['AISWatcher'],
            fn: (data, props) => {
                let retval = checkCollision(data.message);
                return {data: {message: data.message}, properties: props};
            }
        }
    },
    applications: {
        simulator: (bundle) => {
            let filename = path.resolve(`./ship.csv`);
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
                process.exit(0);
            }
        }
    },
}

function transmit(sortedTransmit, current, bundle) {
    if(sortedTransmit.length > 0 ) {
        const next = sortedTransmit.pop();
        const difference = current.BaseDateTime - next.BaseDateTime;
        const timedelay = Math.abs(difference) / 100 || 1;
        sendMessage(bundlde, current);
        setTimeout(transmit, timedelay, sortedTransmit, next, bundle);
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
