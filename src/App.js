import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { OrbitControls, useTexture } from "@react-three/drei";

import "./styles.css";

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2.6, 0, 0], ...props }));
  const planeTexture = useTexture("Textures/diffusePlane.png");
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={planeTexture} />
    </mesh>
  );
}

function Cube(props) {
  const [ref] = useBox(() => ({
    mass: 1,
    // position: [1, 0, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props
  }));
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas shadows>
      {/* <axesHelper /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} castShadow />
      <OrbitControls />

      <Physics>
        <Plane />
        <Cube position={[-1, 5, 0]} />
        <Cube position={[1, 10, -1]} />
        <Cube position={[-1, 12, -1.5]} />
        <Cube position={[-1.5, 15, 1.5]} />
        <Cube position={[0, 19, -1.5]} />
        {/* <Cube  /> */}
      </Physics>
    </Canvas>
  );
}
