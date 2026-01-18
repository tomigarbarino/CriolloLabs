'use client'

import { useRef } from 'react'
import { Canvas, useFrame, type RootState } from '@react-three/fiber'
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Orb({ onFirstFrame }: { onFirstFrame: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const hasCalledRef = useRef(false)

  useFrame((state: RootState) => {
    if (!meshRef.current) return

    // Call onFirstFrame only once after first render
    if (!hasCalledRef.current) {
      hasCalledRef.current = true
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          onFirstFrame()
        })
      })
    }

    const time = state.clock.getElapsedTime()
    
    // Gentle rotation
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
    meshRef.current.rotation.y = time * 0.1
    meshRef.current.rotation.z = Math.cos(time * 0.15) * 0.05
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function SecondaryMesh({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state: RootState) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.3
    meshRef.current.rotation.y = time * 0.2
  })

  return (
    <mesh ref={meshRef} position={position} scale={0.5}>
      <torusKnotGeometry args={[0.4, 0.15, 100, 16]} />
      <meshStandardMaterial
        color="#10b981"
        roughness={0.3}
        metalness={0.7}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

export function Scene({ onReady }: { onReady?: () => void }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={typeof window !== 'undefined' ? [1, Math.min(window.devicePixelRatio, 2)] : [1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }: { gl: THREE.WebGLRenderer }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Orb onFirstFrame={() => onReady?.()} />
      <SecondaryMesh position={[-2, 1, -1]} />
      <SecondaryMesh position={[2, -1, -2]} />
      
      <Environment preset="city" />
    </Canvas>
  )
}
