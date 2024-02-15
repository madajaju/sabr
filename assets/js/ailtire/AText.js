

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

import { Text } from '../troika-three-text.esm.js';

export default class AText {
    static view3D(node, type) {
        /* Troika text */
        let retval = new Text();
        retval.text = node.text;
        retval.fontSize = node.size || 30;
        retval.color = node.color || 0xFFFFFF;
        retval.anchorX = node.anchorX || 'center';
        retval.anchorY = node.anchorY || 'middle';
        retval.textAlign = node.textAlign || 'center';
        retval.maxWidth = node.maxWidth || 1000;
        retval.whiteSpace = 'normal';
        retval.overflowWrap = 'normal';
        retval.sync();
        return retval;
    }
}

