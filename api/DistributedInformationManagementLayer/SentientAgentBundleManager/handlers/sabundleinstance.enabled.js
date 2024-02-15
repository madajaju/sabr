

/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

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
                            // Need to pass the parameters as well
                            // fn(data.obj, );
                        }
                        data.obj.adminOutStream.send({
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
