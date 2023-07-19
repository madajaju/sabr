/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

import {AText} from "../ailtire/index.js";

let _instances = {};
export default class SConsumer {
    constructor(name) {
        this.id = name
        this.name = name.split('/').pop();
        this.results = {};
        _instances[this.id] = this;
    }

    static view3D(node, type) {
        let color = node.color || "";
        if (type === 'Selected') {
            color = "yellow";
        } else if (type === 'Targeted') {
            color = "red";
        } else if (type === 'Sourced') {
            color = "green";
        }
        const theta = 3.14 / 2;
        const group = new THREE.Group();
        const material = new THREE.MeshLambertMaterial({color: color, opacity: 1});
        const bar = new THREE.BoxGeometry(15, 100, 15);
        const barObj = new THREE.Mesh(bar, material);
        barObj.applyMatrix4(new THREE.Matrix4().makeRotationZ(theta));
        group.add(barObj);
        let label = AText.view3D({text: node.name.replace(/\-/g, '\n'), color: "#ffffff", width: 40, size: 15});
        label.position.set(0, 0, 20);
        group.add(label);

        group.position.set(node.x, node.y, node.z);
        if (node.rotate) {
            if (node.rotate.x) {
                group.applyMatrix4(new THREE.Matrix4().makeRotationX(node.rotate.x));
            }
            if (node.rotate.y) {
                group.applyMatrix4(new THREE.Matrix4().makeRotationY(node.rotate.y));
            }
            if (node.rotate.x) {
                group.applyMatrix4(new THREE.Matrix4().makeRotationZ(node.rotate.z));
            }
        }
        group.aid = node.id;
        node.box = 100;
        return group;
    }
}
