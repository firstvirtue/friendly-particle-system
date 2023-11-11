// https://stackoverflow.com/questions/52972221/how-can-i-render-points-with-different-colors

var vertCode = `
// #include &lt;common&gt;
// #include &lt;color_pars_vertex&gt;
// #include &lt;fog_pars_vertex&gt;
// #include &lt;morphtarget_pars_vertex&gt;
// #include &lt;logdepthbuf_pars_vertex&gt;

// #include &lt;clipping_planes_pars_vertex&gt;

uniform float uTime;
uniform float uRadius;

varying vec2 vPUv;
varying vec2 vUv;
varying vec2 vPosColor;
uniform float size;
uniform float scale;

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

void main() {
    // #include &lt;color_vertex&gt;
    // #include &lt;begin_vertex&gt;
    
    vUv = uv;

    vec2 uTexSize = vec2(1000, 1000);
    vec2 puv = position.xy / uTexSize;
    vPUv = puv;

    vPosColor = position.xy + 0.5;
      
    // #include &lt;morphtarget_vertex&gt;
    // #include &lt;project_vertex&gt;
    
    float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 1.5);
    vec3 particlePosition = position * rotation3dY(uTime * 0.3 * distanceFactor);

    // vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = 2.0;
    gl_PointSize *= (1.0 / - viewPosition.z);
    
    // #ifdef USE_SIZEATTENUATION
        // bool isPerspective = isPerspectiveMatrix( projectionMatrix );
        // if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
    // #endif

    // #include &lt;logdepthbuf_vertex&gt;
    // #include &lt;clipping_planes_vertex&gt;
    // #include &lt;worldpos_vertex&gt;
    // #include &lt;fog_vertex&gt;
}
`;

  export default vertCode