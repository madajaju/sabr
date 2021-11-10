import {AText} from "../ailtire/index.js";

let _instances = {};
export default class SProducer {
    constructor(name) {
        this.id = name
        this.name = name.split('/').pop();
        this.results = {};
        _instances[this.id] = this;
    }
    static view3D(node, type) {
        let color = node.color || "blue";
        if (type === 'Selected') {
            color = "yellow";
        } else if (type === 'Targeted') {
            color = "red";
        } else if (type === 'Sourced') {
            color = "green";
        }
        const theta = 3.14 / 2;
        const group = new THREE.Group();
        const cone = new THREE.ConeGeometry(5, 10, 32);
        const material = new THREE.MeshLambertMaterial({color: color, opacity: 1});
        const coneObj = new THREE.Mesh(cone, material);
        coneObj.applyMatrix4(new THREE.Matrix4().makeRotationZ(-theta));
        group.add(coneObj);
        // let label = AText.view3D({text: node.name.replace(/\-/g, '\n'), color: "#ffffff", width: 20, size: 15});
        // label.position.set(0, -5, 20)
        // group.add(label);

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
        node.box = 30;
        return group;
    }
}
