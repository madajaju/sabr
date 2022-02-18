module.exports = {
    name: 'sabundleinstance.created',
    handlers: [
        {
            description: 'Bundle Instance Created for the SABR',
            fn: (data) => {
                // This event is happening on the same server.
                if(data.obj) {
                    return data.obj;
                    // Run on another server.
                } else if(data._attributes) {
                    let sabri = new SABundleInstance({name: data._attributes.name});
                    sabri.deploying();
                }

            }
        },

    ]
};
