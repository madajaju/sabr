module.exports = {
    name: 'inputstreaminstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/sabr/diml/dsm/stream/deployed',
            fn: (data) => {
                if(data.obj) {
                    console.log("ENABLED INPUT:", data.obj.name);
                    return {stream: data.obj.name};
                    // Other Side do not propagate.
                } else if(data._attributes) {
                    return {stream: null}
                }
            }
        },

    ]
};
