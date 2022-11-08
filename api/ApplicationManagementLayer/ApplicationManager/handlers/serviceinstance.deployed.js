module.exports = {
    name: 'serviceinstance.deployed',
    handlers: [
        {
            description: 'Handle the service deployed and make sure it is ready to be provisioned.',
            action: '/aml/am/service/provision',
            fn: (data) => {
                if(data.obj) {
                    let service = ServiceInstance.find(data.obj.name);
                    if ( service && service.state && service.state !== "Deployed") {
                        service.url = data.obj.url;
                        service.deployed();
                    }
                    return {service: data.obj.name, url: data.obj.url};
                }
            }
        },

    ]
};
