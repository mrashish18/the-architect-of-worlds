'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useWorldStore } from '@/stores/useWorldStore'
import { WORLDS } from '@/config/worlds'
import { Html, Float } from '@react-three/drei'

export function NexusWorld() {
  const { activeWorld } = useWorldStore()
  const config = WORLDS['nexus']
  const isActive = activeWorld === 'nexus'

  const coreRef = useRef<THREE.Mesh>(null!)
  const ringsRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.5
      coreRef.current.rotation.x -= delta * 0.2
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x += delta * 0.1
      ringsRef.current.rotation.y += delta * 0.2
      ringsRef.current.rotation.z += delta * 0.15
    }
  })

  return (
    <group position={config.position}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial 
            color="#ffbb00" 
            emissive="#ffbb00" 
            emissiveIntensity={1.5} 
            wireframe 
          />
        </mesh>
        
        <group ref={ringsRef}>
          <mesh>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
          </mesh>
          <mesh rotation={[Math.PI/2, 0, 0]}>
            <torusGeometry args={[3.5, 0.02, 16, 100]} />
            <meshBasicMaterial color="#ffbb00" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
          </mesh>
        </group>
      </Float>

      {isActive && (
        <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
          <div className="flex flex-col animate-fade-in-up mt-32 ml-48 pointer-events-auto">
            <div className="w-[450px] p-8 bg-black/40 border-l-2 border-yellow-400/50 backdrop-blur-2xl">
              <h2 className="text-3xl font-heading text-white tracking-[0.2em] mb-4 text-glow">THE NEXUS</h2>
              <div className="text-white/60 font-sans text-sm leading-relaxed space-y-4">
                <p>
                  The central core. The beginning of the cosmic workshop.
                </p>
                <div className="p-4 bg-yellow-500/10 font-mono text-xs text-yellow-300 border border-yellow-500/20 shadow-[0_0_15px_rgba(255,187,0,0.1)]">
                  <code>&gt; CORE SYSTEMS ONLINE</code><br/>
                  <code>&gt; AESTHETIC DIRECTIVES UPDATED</code><br/>
                  <code>&gt; ALL WORLDS STABILIZED</code>
                </div>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}
