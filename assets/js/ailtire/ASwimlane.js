

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

import {AText, AActor} from "./index.js";

export default class ASwimlane {

    constructor(config) {
        this.config = config;
    }

    static default = {
        fontSize: 16,
        height: 200,
        width: 1000,
        depth: 100,
    }

    static calculateBox(node) {
        node.w = node.w || 0;
        node.h = node.h || 0;
        node.d = node.d || 0;
        let nameArray = node.name.length;
        let height = Math.max((nameArray * ASwimlane.default.fontSize) / 2 + 10, ASwimlane.default.height, node.h);
        let width = Math.max(ASwimlane.default.width, node.children.length * 200, node.w);
        let depth = Math.max(ASwimlane.default.depth, node.d);
        let radius = Math.max(Math.sqrt(width * width + height * height), Math.sqrt(height * height + depth * depth), Math.sqrt(width * width + depth * depth))/2;
        return {w: width, h: height, d: depth, r: radius};
    }

    static view3D(node, type) {
        let opacity = node.opacity || 0.25;
        let color = node.color || "#aa88aa";

        let size = ASwimlane.calculateBox(node);
        let height = size.h;
        let width = size.w;
        let depth = size.d;
        node.w = size.w;
        node.h = size.h;
        node.d = size.d;
        let geometry = new THREE.BoxGeometry(width, height, depth);
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
            side: THREE.BackSide,
        });
        const box = new THREE.Mesh(geometry, material);
        let name = node.name;
        if (!name) {
            name = node.id;
        }
        let label = AText.view3D({
            text: name.replace(/\s/g, '\n'),
            color: "#ffffff",
            width: width,
            anchorY: "top",
            size: ASwimlane.default.fontSize
        });
        label.applyMatrix4(new THREE.Matrix4().makeRotationZ(Math.PI/2));
        label.position.set(-(size.w/2), 0, size.d / 2 + 1);
        // If the swimlane is an actor then add the actor
        if(node.type === 'actor') {
            let item = AActor.view3D({name:"", color:"#cccccc"});
            item.scale.set(0.5,0.5,0.5);
            item.position.set(-(size.w/2 -10),-(size.h/2 - 35), size.d/2 +1);
            box.add(item);
        }
        box.add(label)

        box.position.set(node.x, node.y, node.z);
        box.aid = node.id;
        node.box = 0.000001;
        node.expandLink = `nolink`;
        return box;
    }
}
