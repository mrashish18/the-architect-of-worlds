'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useWorldStore } from '@/stores/useWorldStore'
import { WORLDS } from '@/config/worlds'
import { Html } from '@react-three/drei'
import { oceanVertexShader, oceanFragmentShader } from '@/shaders/ocean'

export function OceanWorld() {
  const { activeWorld } = useWorldStore()
  const config = WORLDS['ocean']
  const isActive = activeWorld === 'ocean'

  const surfaceRef = useRef<THREE.Mesh>(null!)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorDeep: { value: new THREE.Color('#001133') },
    uColorShallow: { value: new THREE.Color('#00aaff') },
  }), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    uniforms.uTime.value = t

    if (surfaceRef.current) {
      surfaceRef.current.rotation.y = t * 0.02
    }
  })

  return (
    <group position={config.position}>
      {/* Ocean Planet Surface */}
      <mesh ref={surfaceRef}>
        <sphereGeometry args={[1.0, 256, 256]} />
        <shaderMaterial 
          vertexShader={oceanVertexShader}
          fragmentShader={oceanFragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>

      {/* Inner Core (gives it depth) */}
      <mesh>
        <sphereGeometry args={[0.95, 32, 32]} />
        <meshBasicMaterial color="#000a1a" />
      </mesh>

      {/* UI Overlay */}
      {isActive && (
        <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
          <div className="flex flex-col animate-fade-in-up mt-32 ml-48 pointer-events-auto">
            <div className="w-[400px] p-8 bg-black/40 border-l-2 border-blue-500/50 backdrop-blur-2xl">
              <h2 className="text-3xl font-heading text-white tracking-[0.2em] mb-4 text-glow">SKILLS</h2>
              <p className="text-white/70 font-sans text-xs leading-relaxed mb-6">
                Like an ocean, deep knowledge is vast and constantly shifting.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['React.js', 'Next.js', 'Three.js', 'WebGL', 'Tailwind', 'TypeScript', 'GLSL', 'Framer'].map(skill => (
                  <div key={skill} className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-100 font-mono text-xs uppercase tracking-widest text-center shadow-[0_0_10px_rgba(0,170,255,0.1)] hover:bg-blue-500/30 transition-colors cursor-pointer">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}
