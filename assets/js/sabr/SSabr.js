import {AText} from "../ailtire/index.js";

let _instances = {};
export default class SSabr {
    constructor(name) {
        if(_instances.hasOwnProperty(name)) {
            return _instances[name];
        }
        this.id = name
        this.inputs = {};
        this.outputs = {};
        _instances[name] = this;
        return _instances[name];
    }

    static view3D(node, type) {
        let color = node.color || "purple";
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
        const box = new THREE.BoxGeometry(60, 60, 60);
        const bar = new THREE.CylinderGeometry(30, 5, 30, 32);
        const barObj = new THREE.Mesh(bar, material);
        const boxObj = new THREE.Mesh(box, material);
        boxObj.position.set(-45,0,0);
        barObj.applyMatrix4(new THREE.Matrix4().makeRotationZ(theta));
        group.add(barObj);
        group.add(boxObj);
        let label = AText.view3D({text: node.name, color: "#ffffff", width: 200, size: 30});
        label.position.set(0, 0, 61);
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
        node.box = 40;
        return group;
    }

    static handle(result, id) {
        let stream = _instances[id];
        stream.results = result;
        stream.showGraph('new');
        stream.showDetails();
    }

    updateData(callback) {
        let obj = this;
        let url = `pulsar/topic?id=${obj.id}`;
        $.ajax({
            url: url,
            success: (result) => {
                obj.storeData(result);
                if(callback) {
                    callback(obj);
                }
            },
            error: (result) => {
                console.log(result);
            }
        });
    }

    storeData(result) {
        this.results = result;
    }
    static showAllGraph(streams, mode) {
        if(mode === "new") {
            window.graph.clearObjects();
        }
        for(let i in streams) {
            SStream.viewDeep3D(streams[i], "add");
        }
    }
    showGraph(mode) {
        window.graph.clearObjects();
        SStream.viewDeep3D(this,mode);
    }
    static viewDeep3D(stream, mode) {
        let data = {nodes: {}, links: []};

        let node = {
            id: stream.id,
            name: stream.name,
            view: SStream.view3D,
        };

        data.nodes[stream.id] = node;

        let i = 0;

        for (let cname in stream.channels) {
            let nodeText = stream.channels[cname].name.split(/\-/).pop();
            let node = {
                id: cname,
                name: nodeText,
                view: SChannel.view3D,
                rbox: {parent:stream.id,
                    x:{min:150, max: 150},
                    y:{min:-35, max: 35},
                    z:{min:-35, max: 35},
                },
            };
            data.nodes[cname] = node;
        }
        if (mode === 'add') {
            window.graph.addData(data.nodes, data.links);
        } else {
            window.graph.setData(data.nodes, data.links);
        }
        window.graph.showLinks();
        for(let i in stream.channels) {
            stream.channels[i].updateData( (channel) => {
                SStream.viewOther3D(channel, stream, "add");
            });
        }
    }
    static viewOther3D(channel, stream, mode) {
        let data = {nodes: {}, links: []};
        for(let sname in channel.results.subscriptions) {
           let subscription = channel.results.subscriptions[sname];
           let node = {
               id: sname,
               name: sname,
               view: SSubscription.view3D,
           }
           data.nodes[sname] = node;
           data.links.push({source:stream.id, target:node.id, value: 0.2});
        }

        if (mode === 'add') {
            window.graph.addData(data.nodes, data.links);
        } else {
            window.graph.setData(data.nodes, data.links);
        }
        window.graph.showLinks();
    }
}
