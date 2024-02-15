

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
        retval += obj.secureVault.vault.encryptedData;
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
