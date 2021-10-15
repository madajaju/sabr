module.exports = {
    name: 'serviceinstance.deployed',
    handlers: [
        {
            description: 'Handle the service is ready to be provisioned',
            action: '/am/service/provision',
            fn: (data) => {
                if(data.obj) {
                    let service = new ServiceInstance.find(data.obj.name);
                    if ( service.state && service.state !== "Deployed") {
                        service.url = data.obj.url;
                        service.deployed();
                    }
                    return {service: data.obj.name, url: data.obj.url};
                }
            }
        },

    ]
};
