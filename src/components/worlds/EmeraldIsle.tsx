'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useWorldStore } from '@/stores/useWorldStore'
import { WORLDS } from '@/config/worlds'
import { Html } from '@react-three/drei'
import { earthVertexShader, earthFragmentShader, cloudVertexShader, cloudFragmentShader, atmosphereVertexShader, atmosphereFragmentShader } from '@/shaders/earth'

export function EmeraldIsle() {
  const { activeWorld } = useWorldStore()
  const config = WORLDS['emerald']
  const isActive = activeWorld === 'emerald'

  const surfaceRef = useRef<THREE.Mesh>(null!)
  const cloudsRef = useRef<THREE.Mesh>(null!)
  const atmosphereRef = useRef<THREE.Mesh>(null!)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorWater: { value: new THREE.Color('#002B5B') }, // Deep blue
    uColorLand: { value: new THREE.Color('#2A5E1A') },  // Green
    uColorForest: { value: new THREE.Color('#103808') }, // Dark green
    uColorSand: { value: new THREE.Color('#D2B48C') },   // Tan
  }), [])

  const cloudUniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), [])

  const atmosphereUniforms = useMemo(() => ({
    uColor: { value: new THREE.Color('#64B5F6') }, // Light blue atmosphere
  }), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    uniforms.uTime.value = t
    cloudUniforms.uTime.value = t

    if (surfaceRef.current) surfaceRef.current.rotation.y = t * 0.05
    if (cloudsRef.current) cloudsRef.current.rotation.y = t * 0.08
    if (atmosphereRef.current) atmosphereRef.current.rotation.y = t * 0.05
  })

  return (
    <group position={config.position}>
      {/* Atmosphere Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <shaderMaterial 
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          uniforms={atmosphereUniforms}
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Cloud Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.05, 64, 64]} />
        <shaderMaterial 
          vertexShader={cloudVertexShader}
          fragmentShader={cloudFragmentShader}
          uniforms={cloudUniforms}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Planet Surface */}
      <mesh ref={surfaceRef}>
        <sphereGeometry args={[1.0, 128, 128]} />
        <shaderMaterial 
          vertexShader={earthVertexShader}
          fragmentShader={earthFragmentShader}
          uniforms={uniforms}
        />
      </mesh>

      {/* UI Overlay */}
      {isActive && (
        <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
          <div className="flex flex-col animate-fade-in-up mt-32 ml-48 pointer-events-auto">
            <div className="w-[400px] p-8 bg-black/40 border-l-2 border-emerald-400/50 backdrop-blur-2xl rounded-r-xl">
              <h2 className="text-3xl font-heading text-white tracking-[0.2em] mb-4 text-glow">ABOUT ME</h2>
              <div className="text-white/80 font-sans text-sm leading-relaxed space-y-4">
                <p>
                  I am a passionate creative developer specializing in immersive 3D experiences.
                  My goal is to bridge the gap between engineering and art.
                </p>
                <div className="h-px w-full bg-emerald-500/30" />
                <p className="text-emerald-300 font-mono text-xs">
                  CURRENT ORBIT: EXPLORING WEBGL
                </p>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}
