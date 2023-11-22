const fragmentShader = `
uniform sampler2D tex;
varying vec2 vPosColor;

void main() {
  // vec3 color = vec3(0.34, 0.53, 0.96);
  // gl_FragColor = vec4(color, 1.0);

  vec4 mapTexel = texture2D( tex, vPosColor );

  // vec3 color = vec3(0.34, 0.53, 0.96);
  // gl_FragColor = vec4(color, 1.0);

  vec3 outgoingLight = vec3( 0.0 );
  vec3 color = mapTexel.rgb;
  outgoingLight = color.rgb;
  gl_FragColor = vec4( outgoingLight, 1.0 );
}
`

export default fragmentShader
