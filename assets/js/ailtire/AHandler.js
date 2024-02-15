

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

import { AText, A3DGraph, ASelectedHUD} from './index.js';

export default class AHandler {
    constructor(config) {
        this.config = config;
    }

    static default = {
        fontSize: 16,
        height: 80,
        width: 20,
        depth: 20
    }

    static calculateBox(node) {
        let height = AHandler.default.height;
        let width = AHandler.default.width;
        let depth = AHandler.default.depth;
        let radius = Math.max(Math.sqrt(width*width + height*height), Math.sqrt(height*height + depth*depth), Math.sqrt(width*width + depth*depth))/2;
        return {w: width, h: height, d: depth, r:radius};
    }

    static view3D(node, type) {
        let opacity = node.opacity || 1;
        let size = AHandler.calculateBox(node);
        let color = "#7700cc";
        if (type === 'Selected') {
            color = "yellow";
        } else if (type === 'Targeted') {
            color = "red";
        } else if (type === 'Sourced') {
            color = "green";
        }
        const theta = Math.PI / 2;
        let geometry = new THREE.ConeGeometry(size.w, size.h/2);
        geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(theta));
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
        const box = new THREE.Mesh(geometry, material);
        box.position.set(0,0,-size.w);
        let geo2 = new THREE.CylinderGeometry(size.w/4, size.w/4, size.h/2);
        geo2.applyMatrix4(new THREE.Matrix4().makeRotationX(theta));
        const material2 = new THREE.MeshPhysicalMaterial({
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
        const item2 = new THREE.Mesh(geo2, material2);
        item2.position.set(0, 0, 0);
        const group = new THREE.Group();
        group.add(box);
        group.add(item2);
        group.applyMatrix4(new THREE.Matrix4().makeRotationY(-theta));
        group.position.set(node.x, node.y, node.z);

        let label = AText.view3D({text:node.name.replace(/\./g, '\n'), color:"#ffffff", width: 200, size: 12});
        label.position.set(0,0, 2*size.d+1);
        label.applyMatrix4(new THREE.Matrix4().makeRotationY(-2*theta));
        group.add(label);

        group.aid = node.id;
        node.box = node.box || size.width;
        node.expandLink = `handler/get?id=${node.id}`;
        node.expandView = AHandler.handle;
        node.getDetail = AHandler.getDetail;

        return group;
    }
    static getDetail(node) {
        $.ajax({
            url: node.expandLink,
            success: (results) => {
                AHandler.showDetail(results);
            }
        });
    }
    static showDetail(result) {
        ASelectedHUD.update('Handler', []);

    }
    static viewDeep3D(obj) {

    }
    static handle(results) {

    }
}

