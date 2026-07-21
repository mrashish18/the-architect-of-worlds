'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useWorldStore } from '@/stores/useWorldStore'
import { WORLDS } from '@/config/worlds'
import { Html } from '@react-three/drei'

export function SingularityWorld() {
  const { activeWorld } = useWorldStore()
  const config = WORLDS['singularity']
  const isActive = activeWorld === 'singularity'

  const pointsRef = useRef<THREE.Points>(null!)
  const centerRef = useRef<THREE.Mesh>(null!)

  const { positions, randoms } = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)
    const randoms = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const radius = 0.5 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      // mostly flat disk
      const y = (Math.random() - 0.5) * 0.2 * (4 - radius)
      
      positions[i * 3] = radius * Math.cos(theta)
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = radius * Math.sin(theta)
      
      randoms[i] = Math.random()
    }
    return { positions, randoms }
  }, [])

  useFrame((state, delta) => {
    if (centerRef.current) {
      centerRef.current.rotation.y += delta * 2
      centerRef.current.rotation.x += delta * 1.5
    }
    
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < positions.length / 3; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const z = positions[i3 + 2]
        
        const radius = Math.sqrt(x*x + z*z)
        const speed = 0.05 / radius + randoms[i] * 0.02
        
        const currentTheta = Math.atan2(z, x)
        const nextTheta = currentTheta - speed
        
        // slowly pull in
        const nextRadius = radius > 0.5 ? radius - (0.001 / radius) : 3.5 + Math.random()
        
        positions[i3] = nextRadius * Math.cos(nextTheta)
        positions[i3 + 2] = nextRadius * Math.sin(nextTheta)
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
      // tilt the accretion disk
      pointsRef.current.rotation.x = Math.PI / 8
      pointsRef.current.rotation.z = -Math.PI / 16
    }
  })

  return (
    <group position={config.position}>
      {/* Event Horizon */}
      <mesh ref={centerRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      
      {/* Accretion Disk */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#ff0055" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
      </points>

      {isActive && (
        <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
          <div className="flex flex-col animate-fade-in-up mt-32 ml-48 pointer-events-auto">
            <div className="w-[400px] p-8 bg-black/40 border-l-2 border-rose-500/50 backdrop-blur-2xl">
              <h2 className="text-3xl font-heading text-white tracking-[0.2em] mb-4 text-glow">CONTACT</h2>
              <div className="space-y-4">
                <p className="text-white/60 font-sans text-sm mb-6 leading-relaxed">
                  The singularity represents the convergence of ideas. If you are ready to cross the event horizon, establish a connection.
                </p>
                <button className="w-full py-3 bg-rose-600/20 hover:bg-rose-600/40 border border-rose-500/50 text-white font-heading tracking-widest text-sm transition-all shadow-[0_0_15px_rgba(255,0,85,0.2)]">
                  INITIATE TRANSMISSION
                </button>
                <div className="flex justify-between gap-4 mt-4">
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-mono text-xs transition-colors">
                    GITHUB
                  </button>
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-mono text-xs transition-colors">
                    LINKEDIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}
