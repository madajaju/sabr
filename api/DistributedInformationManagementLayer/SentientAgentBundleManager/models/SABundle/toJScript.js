const path = require('path');

module.exports = {
    friendlyName: 'toJScript',
    description: 'Convert the Bundle to a string to be passed over a connection.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {},

    exits: {},

    fn: (obj, inputs) => {
        let retval = 'module.exports = {';
        for (let aname in obj._attributes) {
            retval += `${aname}: "${obj._attributes[aname]}",\n`;
        }
        retval += 'inputs: {\n';
        retval += getItems(obj.inputs, (item) => { return `${item.name}: { }`;}).join(',');
        retval += '},\n';
        retval += 'outputs: {';
        retval += getItems(obj.outputs, (item) => { return `${item.name}: { }`;}).join(',');
        retval += '},\n';
        retval += 'transforms: {';
        for (let i in obj.transforms) {
            let transform = obj.transforms[i];
            retval += `${transform.name}: { `;
            retval += ` inputs: [ `;
            retval += getItems(transform.inputs, (item) => { return `"${item.name}"`;}).join(',');
            retval += '],';
            retval += ` outputs: [ `;
            retval += getItems(transform.outputs, (item) => { return `"${item.name}"`;}).join(',');
            retval += '],';
            if(transform.fn) {
                retval += `fn: ${JSON.stringify(transform.fn)},`;
            }
            retval += '},';
        }
        retval += "},\n";
        retval += "applications: { ";
        for(let i in obj.applications) {
            let app = obj.applications[i];
            retval += `${app.name}: `;
            retval += app.fn.toString();
            retval += ",";
        }
        retval += "},\n";
        retval += 'policies: {';
        retval += getItems(obj.policies, (item) => {
            let subval = "";
            subval += `${item.name}: {\n`;
            subval += `name: '${item.name},\n`;
            subval += `transforms: {\n`;
            subval += getItems(item.transforms, (sitem, name) => { return `${name}: ${sitem.toString}`; }).join(',');
            subval += '}';
            return subval;
        }).join(',');
        retval += '},\n';
        retval += `secureVault: {`;
        retval += `store: \n`;
        retval += obj.secureVault.store.encryptedData;
        retval += " }\n";
        return retval;
    }
};

function getItems(items,fn) {
    let retval = [];
    for(let i in items) {
        let item = items[i];
        let newString = fn(item, i);
        retval.push(newString);
    }
    return retval;
}
