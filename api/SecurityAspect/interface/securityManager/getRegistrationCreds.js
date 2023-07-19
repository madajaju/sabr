/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const {once} = require('events');
const bent = require('bent');


const isDirectory = source => fs.lstatSync(source).isDirectory();
const isFile = source => !fs.lstatSync(source).isDirectory();

module.exports = {
    friendlyName: 'getRegistrationCreds',
    description: 'Deploy a SAB bundle that is passed in.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            description: "Name of the SABR to get Registration Creds",
            type: 'string',
            required: true,
        },
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (inputs, env) {
        // make sure the target matches the targets for this edge device.
        let name = inputs.name;
        // Return the registration credentials
        let retval = new Credential({name:name});
        return retval;
    }
};
