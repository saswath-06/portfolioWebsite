import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Planet = () => {
  const { scene, animations } = useGLTF("/zoom_in/scene.gltf");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.loop = THREE.LoopRepeat;
      action.play();
    }
    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useFrame((state, delta) => mixer.current?.update(delta));

  return (
    <primitive
      object={scene}
      scale={4}
      position-y={0}
      rotation-y={0}
      material={new THREE.MeshStandardMaterial({
        color: "pink",  // Apply color to avoid metallic look
        roughness: 0.7,
        metalness: 0,
      })}
    />
  );
};

const MetalPlanetCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 300,
        position: [-8, 5, 12],
      }}
      toneMapping={THREE.ACESFilmicToneMapping}
      outputEncoding={THREE.sRGBEncoding}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MetalPlanetCanvas;
