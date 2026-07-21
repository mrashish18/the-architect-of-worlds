'use client'

import React, { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useWorldStore } from '@/stores/useWorldStore'
import { WORLDS } from '@/config/worlds'
import { Html } from '@react-three/drei'
import { lavaVertexShader, lavaFragmentShader } from '@/shaders/lava'

export function ForgePlanet() {
  const { activeWorld } = useWorldStore()
  const config = WORLDS['forge']
  const isActive = activeWorld === 'forge'

  const surfaceRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorRock: { value: new THREE.Color('#1A0F0A') }, // Dark volcanic rock
    uColorLava: { value: new THREE.Color('#FF3300') }, // Bright intense lava
  }), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // Accelerate lava flow when hovered
    uniforms.uTime.value += hovered ? 0.1 : 0.02

    if (surfaceRef.current) {
      surfaceRef.current.rotation.y = t * 0.1
    }
  })

  return (
    <group position={config.position}>
      {/* Lava Planet Surface */}
      <mesh 
        ref={surfaceRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[1.0, 128, 128]} />
        <shaderMaterial 
          vertexShader={lavaVertexShader}
          fragmentShader={lavaFragmentShader}
          uniforms={uniforms}
        />
      </mesh>

      {/* Out of the box: Volcanic Ash Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(Array.from({length: 3000}, () => (Math.random() - 0.5) * 4)),
              3
            ]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#FF6600" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
      </points>

      {/* UI Overlay */}
      {isActive && (
        <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
          <div className="flex flex-col animate-fade-in-up mt-32 ml-48 pointer-events-auto">
            <div className="w-[400px] p-8 bg-black/60 border-l-2 border-orange-500/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,85,0,0.15)]">
              <h2 className="text-3xl font-heading text-white tracking-[0.2em] mb-2 text-glow">PROJECTS</h2>
              <p className="text-orange-400 font-mono text-[10px] tracking-widest mb-6">OUT OF THE BOX THINKING</p>
              
              <div className="flex flex-col gap-4">
                <div className="relative group cursor-pointer overflow-hidden p-4 bg-white/5 border border-white/10 transition-all hover:bg-orange-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <h3 className="font-heading text-orange-400 group-hover:text-white transition-colors">NEURAL ENGINE</h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">A self-evolving ML visualizer</p>
                </div>

                <div className="relative group cursor-pointer overflow-hidden p-4 bg-white/5 border border-white/10 transition-all hover:bg-orange-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <h3 className="font-heading text-orange-400 group-hover:text-white transition-colors">DYSON SPHERE</h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Energy harvesting simulation</p>
                </div>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}
