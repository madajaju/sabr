let _ships = {};
const AEvent = require('ailtire/src/Server/AEvent');

module.exports = {
    name: 'viewer',
    inputs: {
        AISAggregate: {},
    },
    transforms: {
        aggregator: {
            inputs: ['AISAggregate'],
            fn: (data, props) => {
                AEvent.emit("ship.moved", data.message);
                return {data: {message: null}, properties: props};
            }
        }
    },
    applications: {},
}
