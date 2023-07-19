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
    historical: {
        name: 'historical',
        transforms: {
            post: (data, props) => {
                return {payload: data, properties: props};
            },
            pre: (data, props) => {
                return {payload: data, properties: props};
            }
        },
    },
    realtime: {
        name: 'realtime',
        transforms: {
            post: (data, props) => {
                return {payload: data, properties: props};
            },
            pre: (data, props) => {
                return {payload: data, properties: props};
            }
        }
    },
    summary: {
        name: 'summary',
        transforms: {
            post: (data, props) => {
                return {payload: data, properties: props};
            },
            pre: (data, props) => {
                return {payload: data, properties: props};
            }
        }
    }
}
