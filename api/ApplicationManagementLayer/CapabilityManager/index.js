/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

module.exports = {
    shortname: 'cm',
    name: 'Capability Manager',
    description: 'Capability Manager is a package that contains the interface for all of the use cases and models' +
        ' that work with capabilities. A capability can consist of one or more applications, services or SABRs' +
        ' deployed in the ecosystem.',
    color: '#00aaff',
    depends: ['Sentient Agent Bundle Manager', "Application Manager"]
};
