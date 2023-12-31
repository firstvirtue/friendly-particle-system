const fragmentShader = `
varying vec2 vUv;

varying float v_test;

//vec3 colorA = vec3(0.912,0.191,0.652);
//vec3 colorB = vec3(1.000,0.777,0.052);

uniform vec3 u_colorA;
uniform vec3 u_colorB;

varying highp vec2 vTextureCoord;
uniform sampler2D tex;

void main() {
  
  vec3 color = mix(u_colorB, u_colorA, vUv.x);

  // vec3 color = texture2D(tex, vUv).rgb;

  gl_FragColor = vec4(color, 1.0);
}

`

export default fragmentShader