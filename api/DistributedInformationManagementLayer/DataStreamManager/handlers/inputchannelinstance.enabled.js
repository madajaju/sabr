module.exports = {
    name: 'inputchannelinstance.enabled',
    handlers: [
        {
            description: 'Input channel for the bundle Instance deployed for the SABR',
            action: '/sabr/diml/dsm/channel/deployed',
            fn: (data) => {
                if(data.obj) {
                    return {channel: data.obj.name};
                    // Other side do not propagate.
                } else if (data._attributes) {
                    return {channel: null};
                }
            }
        },

    ]
};
