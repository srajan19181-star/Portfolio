import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

/**
 * ParticleStars — 5000 floating particles that drift slowly in 3D space
 */
function StarField() {
  const pointsRef = useRef();

  // Generate random particle positions in a sphere
  const particleCount = 5000;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = Math.random() * 25 + 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

/**
 * Floating glowing orbs
 */
function FloatingOrb({ position, color, scale = 1, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/**
 * ParticleBackground — full-screen animated 3D particle canvas
 */
const ParticleBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} color="#00d4ff" intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#7c3aed" intensity={0.3} />

        <StarField />

        <FloatingOrb position={[-4, 2, -3]} color="#00d4ff" scale={0.5} speed={0.8} />
        <FloatingOrb position={[4, -1, -4]} color="#7c3aed" scale={0.4} speed={1.2} />
        <FloatingOrb position={[0, 3, -6]} color="#00ff88" scale={0.3} speed={0.6} />
        <FloatingOrb position={[-3, -2, -5]} color="#ff0080" scale={0.25} speed={1.5} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
