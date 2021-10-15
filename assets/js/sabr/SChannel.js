import {SSubscription,SConsumer,SProducer} from "../sabr/index.js";
import {AText} from "../ailtire/index.js";

let _instances = {};
export default class SChannel {
    constructor(name) {
        this.id = name
        this.name = name.split('/').pop();
        this.results = {};
        _instances[this.id] = this;
    }

    static view3D(node, type) {
        let color = node.color || "orange";
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
        const bar = new THREE.CylinderGeometry(15, 15, 100, 64);
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

    static getAll(opts) {
        let url = "pulsar/topics";
        $.ajax({
            url: url,
            success: (results) => {
                let channels = [];
                for (let i in results) {
                    let channel = new SChannel(results[i]);
                    // channel.updateData();
                    channels.push(channel);
                }
                if (opts.fn) {
                    opts.fn(channels);
                }
            }
        });
    }

    static handle(result, id) {
        let channel = _instances[id];
        channel.results = result;
        channel.showGraph('new');
        channel.showDetails();
    }

    static showList(panel, parent) {
        SChannel.getAll({
            fn: (channels) => {
                let items = [];
                for (let i in channels) {
                    let channel = channels[i];
                    items.push({
                        id: channel.id,
                        text: channel.name,
                        img: 'icon-page',
                        view: 'channel',
                        link: `pulsar/topic?id=${channel.id}`,
                    });
                }
                w2ui[panel].add(parent, items);
            }
        });
    }

    showDetails() {
        if (!w2ui['objlist']) {
            $('#objlist').w2grid({name: 'objlist'});
        }
        if (!w2ui['objdetail']) {
            $('#objdetail').w2grid({
                name: 'objdetail',
                header: 'Details',
                show: {header: true, columnHeaders: false},
                columns: [
                    {
                        field: 'name',
                        label: 'Name',
                        size: '100px',
                        style: 'background-color: #efefef; border-bottom: 1px solid white; padding-right: 5px;',
                        attr: "align=right"
                    },
                    {
                        field: 'value', label: 'Value', size: '100%', render: function (record) {
                            return '<div>' + record.value + '</div>';
                        }
                    }
                ]
            });
        }
        let cols = [
            {field: 'name', size: "20%", resizeable: true, label: "Name", sortable: true},
            {field: 'value', size: "80%", resizeable: true, label: "Value", sortable: true},
        ];
        w2ui['objlist'].columns = cols;
        let records = [];
        let i = 0;
        for (let name in this.results) {
            let value = this.results[name];
            let detail = value;
            if (typeof value === 'object') {
                if (value instanceof Map) {
                    detail = Object.keys(value).join('|');
                    value = Object.keys(value).length;
                } else if (value instanceof Object) {
                    detail = Object.keys(value).join('|');
                    value = Object.keys(value).length;
                } else {
                    detail = value.join('|');
                    value = value.length;
                }
            }
            records.push({
                recid: i++,
                name: name,
                value: value,
                detail: detail,
            });
        }
        w2ui['objlist'].records = records;
        w2ui['objlist'].refresh();
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
    static showAllGraph(channels, mode) {
        if(mode === "new") {
            window.graph.clearObjects();
        }
        for(let i in channels) {
            channels[i].updateData( (channel) => {
                SChannel.viewDeep3D(channel, "add");
            });
        }
    }
    showGraph(mode) {
        window.graph.clearObjects();
        SChannel.viewDeep3D(this,mode);
    }
    static viewDeep3D(channel, mode) {
        let data = {nodes: {}, links: []};

        let node = {
            id: channel.id,
            name: channel.name.replace(/\s/g, '\n'),
            view: SChannel.view3D,
        };

        data.nodes[channel.id] = node;
        let i = 0;

        for (let sname in channel.results.subscriptions) {
            let subscription = channel.results.subscriptions[sname];
            let node = {
                id: sname,
                name: sname,
                view: SSubscription.view3D,
                rbox: {parent:channel.id, y:{max:-100}},
            };
            data.nodes[sname] = node;
            for (let i in subscription.consumers) {
                let consumer = subscription.consumers[i];
                let cnode = {
                    id: consumer.consumerName,
                    name: consumer.consumerName.replace(/\-.*$/, ''),
                    view: SConsumer.view3D,
                    rbox: {parent:sname, y:{max:-100}},
                };
                data.nodes[cnode.id] = cnode;
                data.links.push({source: sname, target: cnode.id, value: 0.1});
            }
            data.links.push({source: channel.id, target: sname, value: 0.1});
            i++;
        }
        for (let sname in channel.results.publishers) {
            let producer = channel.results.publishers[sname];
            let node = {
                id: producer.producerName,
                name: producer.producerName,
                view: SProducer.view3D,
                rbox: {parent:channel.id, y:{min:100}},
            };
            data.nodes[node.id] = node;
            data.links.push({source: node.id, target: channel.id, value: 0.1});
            i++;
        }
        if (mode === 'add') {
            window.graph.addData(data.nodes, data.links);
        } else {
            window.graph.setData(data.nodes, data.links);
        }
        window.graph.showLinks();
    }
}
