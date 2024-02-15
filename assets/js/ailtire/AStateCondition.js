

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

import {AText, AState} from './index.js';

export default class AStateCondition {
    constructor(config) {
        this.config = config;
    }

    static default = {
        fontSize: 10,
        height: 30,
        width: 30,
        depth: 30,
    }

    static calculateBox(node) {
        let nameArray = node.name.split(/\s/).map(item => {
            return item.length;
        });
        let maxLetters = nameArray.reduce(function (a, b) {
            return Math.max(a, b);
        }, -Infinity);
        // Only the width is used.
        let height = node.width || AStateCondition.default.width;
        let width = node.width || AStateCondition.default.width;
        let depth = node.width || AStateCondition.default.width;
        let radius = width / 2;
        return {w: width, h: height, d: depth, r: radius};
    }

    static view3D(node, type) {
        let size = AStateCondition.calculateBox(node);
        let width = size.w;

        let opacity = node.opacity | 1;
        let color = node.color || "#8888dd";
        if (type === 'Selected') {
            color = "yellow";
        } else if (type === 'Targeted') {
            color = "red";
        } else if (type === 'Sourced') {
            color = "green";
        }
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
        // Only the width is used for the diameter of the geo
        node.width = size.w;
        node.height = size.w;
        node.depth = size.w;

        const geo = new THREE.OctahedronGeometry(size.r, 0);
        let group = new THREE.Mesh(geo, material);

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
        node.expandLink = `state/get?id=${node.id}`;
        node.expandView = AState.handle;
        node.getDetail = AState.getDetail;
        return group;
    }

    static getDetail(node) {

    }

    static showDetail(result) {

    }

    static viewDeep3D(statenet, opts) {

    }

    static handle(results, config) {

    }
}

