module.exports = {
    name: 'outputstreaminstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            action: '/sabr/diml/dsm/stream/deployed',
            fn: (data) => {
                if(data.obj) {
                    console.log("ENABLED OUTPUT:", data.obj.name);
                    return {stream: data.obj.name};
                } else if(data._attributes) {
                    // Otherside do not propagate!!
                    console.log("ENABLED OUTPUT NULL");
                    return {stream: null};
                }
            }
        },

    ]
};
