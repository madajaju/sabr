module.exports = {
    name: 'inputchannelinstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/diml/dsm/channel/deployed',
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
