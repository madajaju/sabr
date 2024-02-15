

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

import {AScenario, AText, AUsecase} from './index.js';

export default class AAction {
    constructor(config) {
        this.config = config;
    }

    static default = {
        fontSize: 20,
        height: 20,
        width: 100,
        depth: 20
    }


    static calculateBox(node) {
        let fontSize = node.fontSize || AAction.default.fontSize;
        let nameArray = node.name.split(/\s/).map(item => {
            return item.length;
        });
        let maxLetters = nameArray.reduce(function (a, b) {
            return Math.max(a, b);
        }, -Infinity);
        let height = (nameArray.length * fontSize) / 2 + 10;
        let width = maxLetters * (fontSize / 2) + 20;
        let depth = height * 2;
        let radius = Math.max(Math.sqrt(width * width + height * height), Math.sqrt(height * height + depth * depth), Math.sqrt(width * width + depth * depth))/2;

        return {w: width, h: height * 2, d: depth, r: radius};
    }

    static getDetail(node) {
        $.ajax({
            url: node.expandLink,
            success: (results) => {
                AAction.showDetail(results);
            }
        });
    }
    static showDetail(result) {
        console.log(result);
    }
    static view3D(node, type) {
        let opacity = node.opacity || 0.50;
        let fontSize = node.fontSize || AAction.default.fontSize;
        let color = node.color || "#0000aa";
        if (type === 'Selected') {
            color = "yellow";
        } else if (type === 'Targeted') {
            color = "red";
        } else if (type === 'Sourced') {
            color = "green";
        }
        let size = AAction.calculateBox(node);
        let height = size.h;
        let width = size.w;
        const group = new THREE.Group();
        let cobj = new THREE.CapsuleGeometry(height / 2, width, 4, 8);
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
        let capsule = new THREE.Mesh(cobj, material);
        capsule.applyMatrix4(new THREE.Matrix4().makeRotationZ(Math.PI / 2));
        group.add(capsule);

        let label = AText.view3D({text: node.name, color: "#ffffff", width: width, size: fontSize});
        label.position.set(0, 0, height / 2 + 2);
        label.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, 1));
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
        node.expandLink = `action/get?id=${node.id}`;
        node.expandView = AAction.viewDeep3D;
        node.getDetail = AAction.getDetail;

        return group;
    }

    static viewDeep3D(obj) {

    }
}

