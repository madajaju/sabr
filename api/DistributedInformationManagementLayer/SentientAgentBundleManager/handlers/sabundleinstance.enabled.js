module.exports = {
    name: 'sabundleinstance.enabled',
    handlers: [
        {
            description: 'Bundle Instance deployed for the SABR',
            fn: (data) => {
                // This event is happening on the same server.
                if(data.obj) {
                        let apps = data.obj.parent.applications;
                        for (let aname in apps) {
                            let app = apps[aname];
                            let fn = app.fn;
                            fn(data.obj);
                        }
                        data.obj.adminStream.send({
                            data: {
                                event: 'sabundleinstance.enabled',
                                bundle: data.obj.id,
                                state: 'Enabled,'
                            },
                            properties: {}
                        });
                    return data.obj;
                    // Run on another server.
                } else if(data._attributes) {
                    let bundleName = data._associations.parent._attributes.name;
                    let sabr = SABundle.find(bundleName);
                    let sabri = SABundleInstance.find(data._attributes.name);
                    if(sabr && sabri) {
                        sabr.addToInstances(sabri);
                        sabri.running();
                        sabr.deployed();
                    } else {
                        console.error("Could not find ", data._attributes.name);
                    }
                }

            }
        },

    ]
};
