let _ships = {};

module.exports = {
    name: 'agg',
    outputs: {
        AISAggregate: {},
    },
    inputs: {
        AISShip: {},
    },
    transforms: {
        aggregator: {
            inputs: ['AISShip'],
            outputs: ['AISAggregate'],
            fn: (data, props) => {
                let newMessage = _timeCompress(data.message);
                return {data: {message: newMessage}, properties: props};
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
            return {
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
                location: locations.slice(-1)[0]
            };
        } else {
            return null;
        }
    }
}
