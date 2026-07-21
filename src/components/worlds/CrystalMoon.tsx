'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useWorldStore } from '@/stores/useWorldStore'
import { WORLDS } from '@/config/worlds'
import { Html, Float, MeshTransmissionMaterial } from '@react-three/drei'

export function CrystalMoon() {
  const { activeWorld } = useWorldStore()
  const config = WORLDS['crystal']
  const isActive = activeWorld === 'crystal'

  const crystalRef = useRef<THREE.Mesh>(null!)
  const wireRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.15
      crystalRef.current.rotation.z += delta * 0.1
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.1
      wireRef.current.rotation.x -= delta * 0.05
    }
  })

  return (
    <group position={config.position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={crystalRef}>
          <dodecahedronGeometry args={[1.2, 0]} />
          <MeshTransmissionMaterial 
            color="#ffffff"
            transparent 
            opacity={0.9} 
            metalness={0.1}
            roughness={0.1}
            ior={2.5}
            thickness={2.0}
            transmission={1}
            chromaticAberration={0.15}
            anisotropy={0.3}
          />
        </mesh>
        
        <mesh ref={wireRef}>
          <dodecahedronGeometry args={[1.3, 0]} />
          <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>

      {isActive && (
        <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
          <div className="flex flex-col animate-fade-in-up mt-32 ml-48 pointer-events-auto">
            <div className="w-[450px] p-8 bg-black/40 border-l-2 border-purple-500/50 backdrop-blur-2xl">
              <h2 className="text-3xl font-heading text-white tracking-[0.2em] mb-4 text-glow">EXPERIENCE</h2>
              <div className="space-y-6">
                
                <div className="relative pl-6 border-l border-purple-500/30">
                  <div className="absolute w-2 h-2 bg-purple-500 rounded-full -left-[5px] top-1 shadow-[0_0_10px_#a855f7]" />
                  <span className="text-xs font-mono text-purple-300 mb-1 block">2023 - PRESENT</span>
                  <h3 className="text-sm font-heading text-white tracking-widest uppercase">Senior UI Engineer</h3>
                  <p className="text-xs text-white/50 mt-1 font-sans">Architecting next-gen spatial interfaces and 3D web experiences.</p>
                </div>

                <div className="relative pl-6 border-l border-purple-500/30">
                  <div className="absolute w-2 h-2 bg-purple-500/50 rounded-full -left-[5px] top-1" />
                  <span className="text-xs font-mono text-purple-300/50 mb-1 block">2021 - 2023</span>
                  <h3 className="text-sm font-heading text-white/70 tracking-widest uppercase">Frontend Developer</h3>
                  <p className="text-xs text-white/40 mt-1 font-sans">Built high-performance React applications and interactive dashboards.</p>
                </div>

              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}
