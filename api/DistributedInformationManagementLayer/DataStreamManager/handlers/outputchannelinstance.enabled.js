module.exports = {
    name: 'outputchannelinstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/sabr/diml/dsm/channel/deployed',
            fn: (data) => {
                if(data.obj) {
                    return {channel: data.obj.name};
                } else if(data._attributes) {
                    // Sabrs are reporting their producer information.
                    // store the producer's connection to the sabr.
                    if(!global.hasOwnProperty('producers')) {
                        global.producers = {};
                    }
                    global.producers[data._attributes.producerName] = data;
                    return {channel: null};
                }
            }
        },

    ]
};
