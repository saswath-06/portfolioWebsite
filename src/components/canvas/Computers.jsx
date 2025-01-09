import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop/scene.gltf");
  const [mixer] = useState(() => new THREE.AnimationMixer(scene));
  const frustum = new THREE.Frustum();
  const cameraMatrix = new THREE.Matrix4();

  useEffect(() => {
    if (animations.length) {
      const action = mixer.clipAction(animations[0]);
      action.play();
    }

    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      mixer.update(delta);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mixer.stopAllAction();
    };
  }, [animations, mixer]);

  useFrame(({ camera }) => {
    // Update the camera's projection matrix
    cameraMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraMatrix);

    // Traverse the scene to toggle visibility
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.visible = frustum.intersectsObject(child);
      }
    });
  });

  return (
    <group position={[0, -3, 0]} rotation={[0, 0.5, 0]}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 1.4 : 2}
        position={[0, 0, 0]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Canvas Container */}
      <div className="relative w-full h-full">
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableDamping={true}
              maxPolarAngle={Math.PI / 3}
              minPolarAngle={Math.PI / 2}
              autoRotate={true}
              autoRotateSpeed={15}
            />

            <Computers isMobile={isMobile} />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>

      {/* Text Under Robot */}
      <div
        className="absolute bottom-8"
        style={{
          transform: isMobile ? "translateY(10px)" : "translateY(-25px)", // Adjusted values to move the text slightly down
        }}
      >
        <p
          className="text-gray-400 text-center font-semibold"
          style={{
            fontSize: isMobile ? "14px" : "16px",
          }}
        >
          Interact with me!
        </p>
      </div>
    </div>
  );
};

export default ComputersCanvas;
