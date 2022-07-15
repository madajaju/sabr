module.exports = {
    name: 'serviceinstance.killed',
    handlers: [
        {
            description: 'The service instance is killed.',
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
