'use client'

import React, { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { vertexShader, fragmentShader } from '@/shaders/nebula'

const NebulaMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor1: new THREE.Color('#4a00e0'),
    uColor2: new THREE.Color('#8e2de2'),
    uColor3: new THREE.Color('#f5576c'),
    uOpacity: 0.4,
  },
  vertexShader,
  fragmentShader
)

extend({ NebulaMaterial })

interface NebulaCloudProps {
  position: [number, number, number]
  rotation: [number, number, number]
  colors: [string, string, string]
  scale: number
  opacity?: number
}

const NebulaCloud = ({ position, rotation, colors, scale, opacity = 0.4 }: NebulaCloudProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime
    }
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.0005
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1]} />
      {/* @ts-expect-error — custom material from extend */}
      <nebulaMaterial
        ref={materialRef}
        uColor1={new THREE.Color(colors[0])}
        uColor2={new THREE.Color(colors[1])}
        uColor3={new THREE.Color(colors[2])}
        uOpacity={opacity}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const Nebula: React.FC = () => {
  const clouds: NebulaCloudProps[] = [
    { position: [-20, 10, -40], rotation: [0, Math.PI / 4, 0], colors: ['#4a00e0', '#1a0033', '#8e2de2'], scale: 80 },
    { position: [30, -10, -60], rotation: [0, -Math.PI / 6, 0], colors: ['#8e2de2', '#4a00e0', '#f5576c'], scale: 70, opacity: 0.3 },
    { position: [0, 20, -80], rotation: [Math.PI / 8, 0, 0], colors: ['#f5576c', '#FF8C00', '#1a0033'], scale: 90, opacity: 0.25 },
    { position: [-40, -20, -30], rotation: [0, Math.PI / 3, 0], colors: ['#1a0033', '#4a00e0', '#0077B6'], scale: 60, opacity: 0.35 },
  ]

  return (
    <>
      {clouds.map((cloud, i) => (
        <NebulaCloud key={i} {...cloud} />
      ))}
    </>
  )
}

export default React.memo(Nebula)
