// https://stackoverflow.com/questions/52972221/how-can-i-render-points-with-different-colors

var vertCode = `
uniform vec3 offset;
varying vec2 vPUv;
varying vec2 vUv;
varying vec2 vPosColor;
uniform float size;
uniform float scale;

// #include &lt;common&gt;
// #include &lt;color_pars_vertex&gt;
// #include &lt;fog_pars_vertex&gt;
// #include &lt;morphtarget_pars_vertex&gt;
// #include &lt;logdepthbuf_pars_vertex&gt;

// #include &lt;clipping_planes_pars_vertex&gt;
void main() {
    // #include &lt;color_vertex&gt;
    // #include &lt;begin_vertex&gt;
    
    vUv = uv;

    vec2 uTexSize = vec2(1000, 1000);
    vec2 puv = position.xy / uTexSize;
    vPUv = puv;

    vec2 wwss = vec2(0.5, 0.1);
    vPosColor = position.xy + 0.5;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      
    // #include &lt;morphtarget_vertex&gt;
    // #include &lt;project_vertex&gt;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    gl_PointSize = 2.0;
    
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