import {AText} from "../ailtire/index.js";

let _instances = {};
const _shipColor = {
    21: "#ffffaa",
    22: "#ffffaa",
    30: "#ff8844",
    31: "#ffffaa",
    32: "#ffffaa",
    35: "#4488ff",
    36: "#44ff88",
    52: "#ffffaa",
    60: "#44ff88",
    61: "#44ff88",
    62: "#44ff88",
    63: "#44ff88",
    64: "#44ff88",
    65: "#44ff88",
    66: "#44ff88",
    67: "#44ff88",
    68: "#44ff88",
    69: "#44ff88",
    70: "#ffffaa",
    71: "#ffffaa",
    72: "#ffffaa",
    73: "#ffffaa",
    74: "#ffffaa",
    75: "#ffffaa",
    76: "#ffffaa",
    77: "#ffffaa",
    78: "#ffffaa",
    79: "#ffffaa",
    80: "#ffaa88",
    81: "#ffaa88",
    82: "#ffaa88",
    83: "#ffaa88",
    84: "#ffaa88",
    85: "#ffaa88",
    86: "#ffaa88",
    87: "#ffaa88",
    88: "#ffaa88",
    89: "#ffaa88"
}
export default class SShip {
    constructor(aisData) {
        if (_instances.hasOwnProperty(aisData.MMSI)) {
            return _instances[aisData.MMSI];
        }
        this.id = aisData.MMSI;
        this.tracks = [];
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.object3D = undefined;
        this.arrowObj = undefined;
        this.shipObj = undefined;
        for (let key in aisData) {
            this[key] = aisData[key];
        }
        _instances[aisData.MMSI] = this;
        SShip.view3D(this);
        this.setShipPosition({x: aisData.location.LAT * 10, y: aisData.location.LONG * 10, z: 0});
        return _instances[name];
    }

    static view3D(ship, type) {
        if(ship.object3D) {
            return;
        }
        let color = "#ffffff";
        if (_shipColor.hasOwnProperty(ship.VesselType)) {
            color = _shipColor[ship.VesselType];
        }
        const geo = new THREE.ConeGeometry(ship.Width / 5, ship.Length / 10, 3, 1);
        const material = new THREE.MeshPhysicalMaterial({
            color: color,
            transparent: true,
            opacity: 0.75,
            depthTest: true,
            depthWrite: true,
            alphaTest: 0,
            reflectivity: 0.2,
            thickness: 6,
            metalness: 0,
            side: THREE.DoubleSide
        });
        const obj3D = new THREE.Mesh(geo, material);
        const arrow = new THREE.ConeGeometry(1, (ship.Length / 10) + 4, 20, 1);
        const matArrow = new THREE.MeshPhysicalMaterial({
            color: "#00ff00",
            transparent: true,
            opacity: 1,
            depthTest: true,
            depthWrite: true,
            alphaTest: 0,
            reflectivity: 0.2,
            thickness: 6,
            metalness: 0,
            side: THREE.DoubleSide
        });
        const arrowObj = new THREE.Mesh(arrow, matArrow);
        // obj3D.rotation.x = Math.PI / 2;
        obj3D.rotation.z = (ship.location.Heading * (2 * Math.PI / 360));
        // arrowObj.rotation.x = Math.PI / 2;
        arrowObj.rotation.z = (ship.location.COG * (2 * Math.PI / 360));
        let label = AText.view3D({text: ship.VesselName, color: "#ffffff", width: 200, size: 5, textAlign: 'left'});
        label.position.set(10, 10, 10);
        let stats = `COG: ${ship.location.COG}\nHeading: ${ship.location.Heading}\nSOG:${ship.location.SOG}\nLAT: ${ship.location.LAT}\nLONG: ${ship.location.LONG}`;
        let statsObj = AText.view3D({
            text: stats,
            color: "#ffffff",
            width: 100,
            size: 2.5,
            textAlign: 'left',
            anchorY: 'top'
        });
        statsObj.position.set(10, 7, 10);
        ship.statsObj = statsObj;
        ship.arrowObj = arrowObj;
        ship.shipObj = obj3D;
        ship.label = label;
        const group = new THREE.Group();
        group.add(arrowObj);
        group.add(obj3D);
        group.add(label);
        group.add(statsObj);
        ship.object3D = group;
        window.graph.addObject(group);
        return group;
    }

    static handle(event, data) {
        let ship = new SShip(data);
        switch (event) {
            case 'ship.moved':
                let point2 = {x: data.location.LAT * 10, y: data.location.LONG * 10, z: ship.z + 1};
                let point1 = {x: ship.x, y: ship.y, z: ship.z};
                let lineObj = ship.getLine(point1, point2, "#cccccc");
                window.graph.addObject(lineObj);
                ship.location = data.location;
                ship.setShipPosition(point2);
                break;
            case 'ship.nocontact':
                ship.setNoContact(data);
                break;
            default:
                console.log("Event not captured:", event);
        }
    }

    static showAllGraph(mode) {
        if (mode === "new") {
            window.graph.clearObjects();
            window.graph.setData({}, []);
        }
        // Calculte the center of the ships.
        let min = {x: 1900, y: 1900, z: 1000};
        let max = {x: -1900, y: -1900, z: -900};
        for (let i in _instances) {
            SShip.view3D(_instances[i]);
            min.x = Math.min(min.x, _instances[i].x);
            min.y = Math.min(min.y, _instances[i].y);
            min.z = Math.min(min.z, _instances[i].z);

            max.x = Math.max(max.x, _instances[i].x);
            max.y = Math.max(max.y, _instances[i].y);
            max.z = Math.max(max.z, _instances[i].z);
        }
        // Calculate the center of the ships.
        const maxDim = Math.max((max.x - min.x), (max.y - min.y));
        // const fov = window.graph.graph.camera().fov * (Math.PI / 180);
        // let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));
        let lookAt = {x: max.x - ((max.x - min.x) / 2), y: max.y - ((max.y - min.y) / 2), z: max.z - ((max.z - min.z) / 2)};
        let newPos = {x: lookAt.x, y: lookAt.y, z: 1000};
        window.graph.graph.cameraPosition(
            newPos,
            lookAt,
            3000  // ms transition duration.
        );
    }

    getLine(point1, point2, color) {
        const mat = new THREE.LineBasicMaterial({color: color});
        const points = [];
        points.push(new THREE.Vector3(point1.x, point1.y, point1.z));
        points.push(new THREE.Vector3(point2.x, point2.y, point2.z));

        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const ret = new THREE.Line(geo, mat);
        this.tracks.push(ret);
        return ret;
    }

    setNoContact(data) {
        //    if (!this.flagObj) {
        const flag = new THREE.BoxGeometry(1, 1, 10);
        const flagMat = new THREE.MeshPhysicalMaterial({
            color: "#ff0000",
            transparent: true,
            opacity: 1,
            depthTest: true,
            depthWrite: true,
            alphaTest: 0,
            reflectivity: 0.2,
            thickness: 6,
            metalness: 0,
            side: THREE.DoubleSide
        });
        const flagObj = new THREE.Mesh(flag, flagMat);
        flagObj.position.set(data.LAT * 10, data.LONG * 10, this.z);
        window.graph.addObject(flagObj);
        this.flagObj = flagObj;

        //   } else {
        /*this.flagObj.material.color.set("#ff0000");
    }*/
    }

    setShipPosition = (position) => {
        this.x = position.x;
        this.y = position.y;
        this.z = position.z;
        let stats = `COG: ${this.location.COG}\nHeading: ${this.location.Heading}\nSOG:${this.location.SOG}\nLAT: ${this.location.LAT}\nLONG: ${this.location.LONG}`;
        this.statsObj.text = stats;
        this.statsObj.sync();
        this.object3D.position.set(this.x, this.y, this.z);
        this.shipObj.rotation.z = this.location.Heading * (2 * Math.PI / 360);
        this.arrowObj.rotation.z = this.location.COG * (2 * Math.PI / 360);
    }

    showGraph(mode) {
        //    window.graph.clearObjects();
    }
}
