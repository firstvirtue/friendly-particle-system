import simulationVertexShader from './simulationVertexShader';
import simulationFragmentShader from './simulationFragmentShader';
import * as THREE from 'three';

const getRandomDataSphere = (width, height) => {
  const length = width * height * 4
  const data = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    const distance = Math.sqrt((Math.random())) * 1.0;
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);

    data[stride] = distance * Math.sin(theta) * Math.cos(phi)
    data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);
    data[stride + 2] = distance * Math.cos(theta);
    data[stride + 3] = 1.0;
  }

  return data;
}

const getRandomDataBox = (width, height) => {
  let len = width * height * 4;
  let data = new Float32Array(len);

  for (let i = 0; i < data.length; i++) {
    const stride = i * 4;

    data[stride] = (Math.random() - 0.5) * 1.0;
    data[stride + 1] = (Math.random() - 0.5) * 1.0;
    data[stride + 2] = (Math.random() - 0.5) * 0.2;
    data[stride + 3] = 1.0;
  }

  return data;
}

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(size) {
    const positionsTextureA = new THREE.DataTexture(
      getRandomDataSphere(size, size),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    positionsTextureA.needsUpdate = true;

    const positionsTextureB = new THREE.DataTexture(
      getRandomDataBox(size, size),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    )
    positionsTextureB.needsUpdate = true;

    const simulationUniforms = {
      positionsA: { value: positionsTextureA },
      positionsB: { value: positionsTextureB },
      uFrequency: { value: 0.25 },
      uTime: { value: 0 }
    }
  
    super({
      uniforms: simulationUniforms,
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });
  }
}

export default SimulationMaterial;