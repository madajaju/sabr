

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

import {
    AText,
} from '../index.js';

export default class ASelectedHUD {
    static visible = false;
    static plane = undefined;
    static height = 0;
    static width = 0;
    static title = "";
    static currentHeight = 0;
    static records = [];
    static colors = {};
    static dist = 20;
    static size = 0.25;

    static sync() {
        ASelectedHUD.hide();
        ASelectedHUD.plane = undefined;
        ASelectedHUD.show();
    }

    static show() {
        let camera = window.graph.graph.camera();
        if (!ASelectedHUD.plane) {
            const dist = ASelectedHUD.dist;
            const vFOV = THREE.MathUtils.degToRad(camera.fov); // convert vertical fov to radians
            const height = 2 * Math.tan(vFOV / 2) * dist; // visible height
            const width = height * camera.aspect;
            let geometry = new THREE.PlaneGeometry(width / 8, height)
            const material = new THREE.MeshBasicMaterial({
                color: "#444444",
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.30
            });
            ASelectedHUD.plane = new THREE.Mesh(geometry, material);
            ASelectedHUD.plane.position.set(7 * width / 16, 0, -dist);
            window.graph.graph.scene().add(camera);
            camera.add(ASelectedHUD.plane);
            ASelectedHUD.visible = true;
            ASelectedHUD.update();
        }
        if (!ASelectedHUD.visible) {
            camera.add(ASelectedHUD.plane);
            ASelectedHUD.visible = true;
        }
    }

    static hide() {
        let camera = window.graph.graph.camera();
        camera.remove(ASelectedHUD.plane);
        ASelectedHUD.visible = false;
    }

    static update(ptitle, precords) {
        let title = ptitle || ASelectedHUD.title;
        let records = precords || ASelectedHUD.records;
        ASelectedHUD.title = title;
        ASelectedHUD.records = records;

        if (ASelectedHUD.plane) {
            let camera = window.graph.graph.camera();
            let plane = ASelectedHUD.plane;
            while (plane.children.length > 0) {
                plane.remove(plane.children[0]);
            }

            let height = plane.geometry.parameters.height;
            let width = plane.geometry.parameters.width;
            let vwidth = width - ASelectedHUD.size;
            let label = AText.view3D({
                text: title,
                color: "#ffffff",
                size: ASelectedHUD.size * 1.2,
                anchorX: 'left',
                anchorY: 'top',
                textAlign: 'left',
            });
            label.position.set(-width / 2, (height / 2.27), 0.01);
            plane.add(label);
            let yoffset = (height / 2.27) - ASelectedHUD.size * 2;
            for (let i in records) {
                let rec = records[i];
                let labeln = AText.view3D({
                    text: rec.name,
                    color: "#cccccc",
                    size: ASelectedHUD.size,
                    anchorX: 'left',
                    anchorY: 'top',
                    textAlign: 'left',
                    maxWidth: width,
                });
                labeln.position.set(-width / 2, yoffset, 0.01);
                plane.add(labeln);
                yoffset -= ASelectedHUD.size;
                let labelv = AText.view3D({
                    text: rec.value,
                    color: "#ffffff",
                    size: ASelectedHUD.size,
                    anchorX: 'left',
                    anchorY: 'top',
                    textAlign: 'left',
                    maxWidth: vwidth,
                });
                // Offset the value by one character.
                labelv.position.set(-width / 2 + ASelectedHUD.size, yoffset, 0.01);
                plane.add(labelv);
                if (rec.value) {
                    let totalwidth = `${rec.value}`.length * 2 * ASelectedHUD.size / 3; // width is 2/3 the height
                    let lines = Math.round((totalwidth / vwidth) + 0.5); // Round up.
                    yoffset -= (lines * ASelectedHUD.size * 1.2);
                } else {
                    yoffset -= ASelectedHUD.size * 1.2;
                }
            }
        }
    }

    static toggle() {
        if (!ASelectedHUD.visible) {
            ASelectedHUD.show();
        } else {
            ASelectedHUD.hide();
        }
    }
}
