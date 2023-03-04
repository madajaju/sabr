import {SChannel,SSabr,SProducer} from "../sabr/index.js";
import {AText} from "../ailtire/index.js";

let _instances = {};
export default class SStream {
    constructor(name) {
        if(_instances.hasOwnProperty(name)) {
            return _instances[name];
        }
        this.id = name
        this.name = name.split('/').pop();
        this.results = {};
        this.channels = {};
        _instances[name] = this;
        return _instances[name];
    }

    static view3D(node, type) {
        let color = node.color || "darkorange";
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
        const bar = new THREE.CylinderGeometry(45, 45, 300, 64);
        const barObj = new THREE.Mesh(bar, material);
        barObj.applyMatrix4(new THREE.Matrix4().makeRotationZ(theta));
        group.add(barObj);
        let label = AText.view3D({text: node.name.replace(/\-/g, '\n'), color: "#ffffff", width: 200, size: 30});
        label.position.set(0, 0, 46);
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
        node.box = 50;
        return group;
    }

    static getAll(opts) {
        let url = "pulsar/topics";
        $.ajax({
            url: url,
            success: (results) => {
                let streams = [];
                for (let i in results) {
                    let [streamName, channelName] = results[i].split(/\-/);
                    let stream = new SStream(streamName);
                    let channel = new SChannel(results[i]);
                    channel.parent = stream;
                    stream.channels[results[i]] = channel;
                    // channel.updateData();
                    streams.push(stream);
                }
                if (opts.fn) {
                    opts.fn(streams);
                }
            }
        });
    }

    static handle(result, obj) {
        let stream = _instances[obj.id];
        if(result) {
            stream.results = result;
        }
        stream.showGraph('new');
        stream.showDetails();
    }

    static handleList(result, id) {
        window.graph.clearObjects();
        window.graph.setData({}, []);
        SStream.showAllGraph(result, "new");
    }

    static showList(panel, parent) {
        SStream.getAll({
            fn: (streams) => {
                let items = [];

                // Stream-Channel
                for (let i in streams) {
                    let stream = streams[i];
                    let sitem = {
                        id: stream.id,
                        text: stream.name,
                        img: 'icon-folder',
                        view:'stream',
                        link: `nolink`,
                        nodes: []
                    };
                    for(let j in stream.channels) {
                        let channel = stream.channels[j];
                        sitem.nodes.push({
                            parent: sitem.id,
                            id: channel.id,
                            text: channel.name,
                            img: 'icon-page',
                            view: 'channel',
                            link: `pulsar/topic?id=${channel.id}`,
                        });
                    }
                    items.push(sitem);
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
    static showAllGraph(streams, mode) {
        if(mode !== "add") {
            window.graph.clearObjects();
            window.graph.setData({}, []);
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
                box: 0.001,
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
        for (let sname in channel.results.subscriptions) {
            let name = sname.split(/\-/).shift();
            let node = {
                id: name,
                name: name,
                view: SSabr.view3D,
            }
            data.nodes[name] = node;
            data.links.push({source:channel.id, target:name, value: 30, width:5});
        }

        for (let i in channel.results.publishers) {
            let publisher = channel.results.publishers[i];
            let pname = publisher.producerName;
            let pid = pname
            let pnode = {
                id: pid,
                name: pname,
                view: SProducer.view3D,

            }
            data.nodes[pname] = pnode;
            if (publisher.sabr) {
                let name = publisher.sabr._associations.bundle._attributes.name;
                name = name.split(/\-/).shift();
                let node = {
                    id: name,
                    name: name,
                    view: SSabr.view3D,
                }

                data.nodes[name] = node;
                data.nodes[pname].rbox = {
                    parent: node.id,
                    x: {min: 30, max: 30},
                    y: {min: -30, max: 30},
                    z: {min: -30, max: 30},
                };
                data.links.push({target: channel.id, source: name, value: 30, width: 5});
            } else {
                data.links.push({target: channel.id, source: pname, value: 30, width: 5});
            }
        }
        if (mode === 'add') {
            window.graph.addData(data.nodes, data.links, {links: {single: true}});
        } else {
            window.graph.setData(data.nodes, data.links, {links: {single: true}});
        }
    }
}
