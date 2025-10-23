"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Satellite({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2.8} rotationIntensity={1.6} floatIntensity={2.2}>
      <mesh position={position}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#c7b6ff"
          emissive="#7a4bff"
          emissiveIntensity={0.65}
          roughness={0.25}
          metalness={0.45}
        />
      </mesh>
    </Float>
  );
}

function CoreOrb() {
  return (
    <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.4}>
      <mesh>
        <icosahedronGeometry args={[1.08, 1]} />
        <meshStandardMaterial
          color="#5348ff"
          emissive="#3410ff"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.6}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

export function TechOrbit() {
  return (
    <div className="tech-orbit" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 3.2], fov: 50, near: 0.1, far: 100 }}
        >
          <color attach="background" args={["#05060f"]} />
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[4, 2, 3]}
            intensity={1.1}
            color="#a18bff"
          />
          <pointLight position={[-4, -3, -2]} intensity={0.6} color="#1b3b8c" />

          <CoreOrb />
          <Satellite position={[1.8, 0.5, -0.6]} />
          <Satellite position={[-1.6, -0.8, 0.4]} />
          <Satellite position={[0.2, 1.6, 0.9]} />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </Suspense>
    </div>
  );
}
