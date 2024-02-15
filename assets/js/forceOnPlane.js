


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

export function forceOnPlane() {
    // d3 style
    function constant(_) {
        return () => _;
    }

    function index(d) {
        return d.index;
    }

    var id = index,
        nodes = [];

    function force(alpha) {
        for (let i = 0, n = nodes.length, node, k = alpha * strength; i < n; ++i) {
            node = nodes[i];
            console.log("Node:", node);
            node.vx += (foci[groupBy(node)].x - node.x) * k;
            node.vy += (foci[groupBy(node)].y - node.y) * k;
            node.vz += (foci[groupBy(node)].z - node.z) * k;
        }
    }

    function initialize() {
        if (!nodes) return;
        console.log("Initialized");
    }

    force.initialize = function(_) {
        nodes = _;
        initialize();
    };

    force.strength = function(x) {
        if (!arguments.length) return strength;
        strength = x;
        return force;
    };

    force.id = function(_) {
        return arguments.length ? ((id = _), force) : id;
    };

    force.size = function(_) {
        return arguments.length ? ((size = _), force) : size;
    };

    force.nodes = function(_) {
        return arguments.length ? ((nodes = _), force) : nodes;
    };

    force.links = function(_) {
        if (!arguments.length) return links;
        if (_ === null) links = [];
        else links = _;
        initialize();
        return force;
    };

    return force;
}

// exports.forceInACube = forceInACube;
