let _ships = {};
const AEvent = require('ailtire/src/Server/AEvent');

module.exports = {
    name: 'viewer',
    inputs: {
        AISAggregate: {},
        AISNoContact: {},
    },
    transforms: {
        aggregator: {
            inputs: ['AISAggregate'],
            fn: (data, props) => {
                if(data.message) {
                    AEvent.emit("ship.moved", data.message);
                }
                return null;
            }
        },
        noContact: {
            inputs: ['AISNoContact'],
            fn: (data, props) => {
                if(data.message) {
                    AEvent.emit('ship.nocontact', data.message);
                }
                return null;
            }
        },
        shipFound: {
            inputs: ['AISUSV'],
            fn: (data, props) => {
                if(data.message) {
                    AEvent.emit('ship.found', data.message);
                }
                return null;
            }
        }
    },
    applications: {},
}
