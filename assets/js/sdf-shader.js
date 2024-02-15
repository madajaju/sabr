

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

var SDFShader = {

  uniforms: {
    map: { type: 't', value: null },
    color: { type: 'v3', value: new THREE.Color('#fff') },
    smoothing: { type: 'f', value: 0.1 },
    threshold: { type: 'f', value: 0.5 },
    outlineDistance: { type: 'f', value: 0.3 },
    outlineColor: { type: 'v3', value: new THREE.Color('#000') },
    opacity: { type: 'f', value: 1.0 },
  },

  vertexShader: [

    "varying vec2 vUv;",

    "void main() {",
      "vUv = uv;",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}"

  ].join('\n'),

  // outline
  // https://github.com/libgdx/libgdx/wiki/Distance-field-fonts#adding-an-outline
  // http://stackoverflow.com/questions/26155614/outlining-a-font-with-a-shader-and-using-distance-field

  fragmentShader: [

    "varying vec2 vUv;",

    "uniform sampler2D map;",
    "uniform vec3 color;",

    "uniform float smoothing;",
    "uniform float threshold;",
    "uniform float opacity;",

    "uniform float outlineDistance;", // Between 0 and 0.5, 0 = thick outline, 0.5 = no outline
    "uniform vec3 outlineColor;",

    "void main() {",
      "float distance = texture2D( map, vUv ).a;",

      // no outline
      // "float alpha = smoothstep( threshold - smoothing, threshold + smoothing, distance );",
      // "alpha *= opacity;",
      // "gl_FragColor = vec4( color, alpha );",

      // outline
      "float outlineFactor = smoothstep(threshold - smoothing, threshold + smoothing, distance);", // change 0.5 to threshold?
      "vec3 color2 = mix(outlineColor, color, outlineFactor);",
      "float alpha = smoothstep(outlineDistance - smoothing, outlineDistance + smoothing, distance);",
      "alpha *= opacity;",
      "gl_FragColor = vec4( color2, alpha );",
    "}"

  ].join('\n')

};
