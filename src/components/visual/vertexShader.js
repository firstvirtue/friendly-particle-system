const vertexShader = `

uniform float u_test;
uniform float u_time;

attribute float a_test;
varying float v_test;

attribute vec2 aTextureCoord;
varying highp vec2 vTextureCoord;

varying vec2 vUv;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
  
  // Uncomment the code and hit the refresh button below for a more complex effect 🪄
  // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = 3.0;
}
`

export default vertexShader