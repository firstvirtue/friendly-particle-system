// https://stackoverflow.com/questions/52972221/how-can-i-render-points-with-different-colors

var vertCode = 'attribute vec3 coordinates;'+
  'attribute vec3 color;'+
  'varying vec3 vColor;'+
  'void main(void) {' +
      ' gl_Position = vec4(coordinates, 1.0);' +
      'vColor = color;'+
      'gl_PointSize = 10.0;'+
  '}';

  export default vertCode