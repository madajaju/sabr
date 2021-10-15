const path = require('path');

module.exports = {
    friendlyName: 'toJScript',
    description: 'Convert the Bundle to a string to be passed over a connection.',
    static: false, // True is for Class methods. False is for object based.
    inputs: {},

    exits: {},

    fn: (obj, inputs) => {
        let retval = 'module.exports = {';
        retval += 'inputs: {';
        retval += getItems(obj.inputs, (item) => { return `${item}: { }`;}).join(',');
        retval += '},';
        retval += 'outputs: {';
        retval += getItems(obj.outputs, (item) => { return `${item}: { }`;}).join(',');
        retval += '},';
        retval += 'transforms: {';
        for (let i in obj.transforms) {
            let transform = obj.transforms[i];
            retval += `${transform.name}: { `
            retval += ` inputs: [ `;
            retval += getItems(transform.inputs, (item) => { return `"${item}"`;}).join(',');
            retval += '],';
            retval += ` outputs: [ `;
            retval += getItems(transform.outputs, (item) => { return `"${item}"`;}).join(',');
            retval += '],';
            retval += `fn: ${transform.fn.toString()},`;
            retval += '},';
        }
        retval += "},";
        retval += "applications: { "
        for(let i in obj.applications) {
            let app = obj.applications[i];
            retval += `${app.name}: `;
            retval += app.fn.toString();
            retval += ",";
        }
        retval += "}}"
        return retval;
    }
};

function getItems(items,fn) {
    let retval = [];
    for(let i in items) {
        let item = items[i].name;
        let newString = fn(item);
        retval.push(newString);
    }
    return retval;
}
