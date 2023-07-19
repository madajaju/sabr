/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

let _ships = {};

module.exports = {
    name: 'agg',
    outputs: {
        AISAgg: {},
    },
    inputs: {
        AISShip: {},
    },
    transforms: {
        aggregator: {
            inputs: ['AISShip'],
            outputs: ['AISAgg'],
            fn: (data, props) => {
                let newMessage = _timeCompress(data.message);
                if (newMessage) {
                    return {data: {message: newMessage}, properties: props};
                } else {
                    return null;
                }
            }
        }
    },
    applications: {},
}

function _timeCompress(aisItem) {
    if (!_ships) {
        _ships = {};
    }
    if (!_ships.hasOwnProperty(aisItem.MMSI)) {
        _ships[aisItem.MMSI] = {
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
        };
        // send the message along
        return aisItem;
    } else {
        let locations = _ships[aisItem.MMSI].location;
        let lastLocation = locations.slice(-1)[0];
        if (lastLocation.LAT !== aisItem.LAT || lastLocation.LONG !== aisItem.LONG) {
            locations.push({
                BaseDateTime: aisItem.BaseDateTime,
                LAT: aisItem.LAT,
                LONG: aisItem.LONG,
                SOG: aisItem.SOG,
                COG: aisItem.COG,
                Heading: aisItem.Heading,
                Status: aisItem.Status,
            });
            return aisItem;
        } else {
            // Don't send because the ship has not moved.
            return null;
        }
    }
}
