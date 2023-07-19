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
    shortname: 'am',
    name: 'Application Manager',
    description: 'Application Manager is a package that defines applications that can' +
        ' be deployed in the SABR environment. An application is a collection of SABRs connected' +
        ' together in the ecosystem. Capabilities are made up of one or more applications, services and SABRs.',
    color: '#00aaff',
    depends: [ "Service Orchestrator"]
};
