

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

import {AScenario, AText, AUsecase, A3DGraph, ASelectedHUD} from './index.js';

export default class AAttribute {
    constructor(config) {
        this.config = config;
    }
    static default = {
        fontSize: 20,
        height: 100,
        width: 50,
        depth: 30
    }


    static calculateBox(node) {
        let nameArray = node.name.split(/\s/).map(item => {return item.length;});
        let maxLetters = nameArray.reduce(function(a, b) { return Math.max(a, b); }, -Infinity);
        let height = nameArray.length*AAttribute.default.fontSize;
        let width = maxLetters * (AAttribute.default.fontSize/2) + 10;
        let depth = AAttribute.default.depth;
        let radius = Math.max(Math.sqrt(width*width + height*height), Math.sqrt(height*height + depth*depth), Math.sqrt(width*width + depth*depth))/2;
        return {w: width, h: height, d: depth, r: radius};
    }

    static view3D(node, type) {
        let opacity = node.opacity || 1;
        let color = node.color || "#aa44aa";
        if (type === 'Selected') {
            color = "yellow";
        } else if (type === 'Targeted') {
            color = "red";
        } else if (type === 'Sourced') {
            color = "green";
        }
        const theta = Math.PI / 2;
        let size = AAttribute.calculateBox(node);
        let height = size.h;
        let width = size.w;
        const group = new THREE.Group();
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
        const center = new THREE.BoxGeometry(width, height, size.d);
        let centerObj = new THREE.Mesh(center,material);
        group.add(centerObj);

        let label = AText.view3D({text:node.name.replace(':','\n'), color:"#ffffff", width: width, size: AAttribute.default.fontSize});
        label.position.set(0,0,16);
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
        node.expandLink = `attribute/get?id=${node.id}`;
        node.expandView = AAttribute.handle;
        node.getDetail = AAttribute.getDetail;

        return group;
    }
    static getDetail(node) {
        $.ajax({
            url: node.expandLink,
            success: (results) => {
                AAttribute.showDetail(results);
            }
        });
    }
    static showDetail(result) {
        ASelectedHUD.update('Attribute' ,[]);
    }
    static viewDeep3D(obj) {

    }
    static handle(results) {

    }
}

