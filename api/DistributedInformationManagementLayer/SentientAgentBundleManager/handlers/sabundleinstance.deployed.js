module.exports = {
    name: 'sabundleinstance.deployed',
    handlers: [
        {
            description: 'Bundle Instance Deployed for the SABR',
            fn: (data) => {
                // This event is happening on the same server.
                if(data.obj) {
                    console.log("---------------------SABRI PARENT:", data.obj.parent);
                    if(data.obj.parent) {
                        data.obj.parent.deployed();
                    }
                    return data.obj;
                    // Run on another server.
                } else if(data._attributes) {
                    let sabri = new SABundleInstance({name: data._attributes.name});
                    let sabr = new SABundle({name: data._attributes.parent._attributes.name});
                    sabri.running();
                    sabr.deployed();
                }
            }
        },

    ]
};
