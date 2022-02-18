module.exports = {
    name: 'serviceinstance.killed',
    handlers: [
        {
            description: 'Handle the service is ready to be provisioned',
            fn: (data) => {
                if(data._attributes) {
                    let serviceInstance = ServiceInstance.find(data._attributes.name);
                    serviceInstance._state = "Killed";
                }
                console.log(data);
                return;
            }
        },

    ]
};
