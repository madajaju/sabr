module.exports = {
    name: 'outputchannelinstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/dsm/channel/deployed',
            fn: (data) => {
                if(data.obj) {
                    return {channel: data.obj.name};
                } else if(data._attributes) {
                    // Other side do not propagate
                    return {channel: null};
                }
            }
        },

    ]
};
