const vertexShader = `
uniform sampler2D uPositions;
uniform float uTime;
varying vec2 vPosColor;
varying vec2 vUv;

void main() {
  vec3 pos = texture2D(uPositions, position.xy).xyz;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vPosColor = pos.xy + 0.5;
  vUv = uv;

  gl_PointSize = 3.0;
  // Size attenuation;
  gl_PointSize *= step(1.0 - (1.0/64.0), position.x) + 0.5;
}

`

export default vertexShader
