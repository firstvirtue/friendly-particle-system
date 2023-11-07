var fragCode = `
varying vec2 vUv;
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D tex;

// #include &lt;common&gt;
// #include &lt;color_pars_fragment&gt;
// #include &lt;map_particle_pars_fragment&gt;
// #include &lt;fog_pars_fragment&gt;
// #include &lt;logdepthbuf_pars_fragment&gt;
// #include &lt;clipping_planes_pars_fragment&gt;

void main() {

// #include &lt;clipping_planes_fragment&gt;

vec3 outgoingLight = vec3( 0.0 );
vec4 diffuseColor = vec4( diffuse, opacity );
vec3 colorA = vec3(0.912,0.191,0.652);

// #include &lt;logdepthbuf_fragment&gt;

vec4 mapTexel = texture2D( tex, vUv );
// diffuseColor *= mapTexelToLinear( mapTexel );


// #include &lt;color_fragment&gt;
// #include &lt;alphatest_fragment&gt;

outgoingLight = diffuseColor.rgb;
gl_FragColor = vec4( outgoingLight, diffuseColor.a );

vec3 color = mapTexel.rgb;
outgoingLight = color.rgb;
gl_FragColor = vec4( outgoingLight, 1.0 );

// #include &lt;tonemapping_fragment&gt;
// #include &lt;encodings_fragment&gt;
// #include &lt;fog_fragment&gt;
// #include &lt;premultiplied_alpha_fragment&gt;

}
  `;

  export default fragCode