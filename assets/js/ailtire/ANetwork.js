

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

import {AText,A3DGraph, ASelectedHUD} from './index.js';

export default class ANetwork {
    constructor(config) {
        this.config = config;
    }
    static default = {
        fontSize: 20,
        height: 20,
        width: 200,
        depth: 20
    }


    static calculateBox(node) {
        let height = ANetwork.default.height;
        let width = ANetwork.default.width;
        let depth = ANetwork.default.depth;
        let radius = height*2;
        return {w: width, h: height, d:depth,r:radius};
    }

    static view3D(node, type) {
        let color = node.color || "#444444";
        if (type === 'Selected') {
            color = "yellow";
        } else if (type === 'Targeted') {
            color = "red";
        } else if (type === 'Sourced') {
            color = "green";
        }
        const theta = Math.PI / 2;
        const opacity = node.opacity || 1;
        let size = ANetwork.calculateBox(node);

        const material = new THREE.MeshPhysicalMaterial({
            color: color,
            transparent: true,
            opacity: opacity,
            depthTest: true,
            depthWrite: true,
            alphaTest: 0,
            reflectivity: 0.2,
            thickness: 6,
            metalness: 0,
            side: THREE.DoubleSide
        });
        const group = new THREE.Group();

        const stack = new THREE.CylinderGeometry(size.h, size.d, size.w, 20);
        let obj = new THREE.Mesh(stack, material);
        obj.position.set(0, 0, 0);
        obj.applyMatrix4(new THREE.Matrix4().makeRotationZ(-theta));
        group.add(obj);

        let label = AText.view3D({text: node.name, color: "#ffffff", width: size.d, size: ANetwork.default.fontSize});
        label.position.set(0, 0, size.d+1);
        group.add(label);

        group.position.set(node.x, node.y, node.z);
        if (node.rotate) {
            if (node.rotate.x) {
                group.applyMatrix4(new THREE.Matrix4().makeRotationX(node.rotate.x));
            }
            if (node.rotate.y) {
                group.applyMatrix4(new THREE.Matrix4().makeRotationY(node.rotate.y));
            }
            if (node.rotate.z) {
                group.applyMatrix4(new THREE.Matrix4().makeRotationZ(node.rotate.z));
            }
        }
        group.aid = node.id;
        node.box = size.r;
        node.expandLink = `network/get?id=${node.id}`;
        node.expandView = ANetwork.handle;
        node.getDetail = ANetwork.getDetail;
        return group;
    }
    static getDetail(node) {
        $.ajax({
            url: node.expandLink,
            success: (results) => {
                ANetwork.showDetail(results);
            }
        });
    }
    static showDetail(result) {
        ASelectedHUD.update('Network', []);
    }
    static viewDeep3D(obj) {

    }
    static handle(results) {

    }
}

