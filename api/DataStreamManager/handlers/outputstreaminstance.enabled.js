module.exports = {
    name: 'outputstreaminstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/dsm/stream/deployed',
            fn: (data) => {
                if(data.obj) {
                    return {stream: data.obj.name};
                } else if(data._attributes) {
                    // Otherside do not propagate!!
                    return {stream: null};
                }
            }
        },

    ]
};
