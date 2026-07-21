'use client'

import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
  GodRays,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Vector2 } from 'three'
import { QualityTier } from '@/types'
import { useWorldStore } from '@/stores/useWorldStore'

interface SceneEffectsProps {
  quality: QualityTier
}

export function SceneEffects({ quality }: SceneEffectsProps) {
  const { nexusCoreRef } = useWorldStore()

  if (quality === 'low') {
    return (
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.8}
          luminanceSmoothing={0.9}
          intensity={0.4}
          mipmapBlur
        />
      </EffectComposer>
    )
  }

  if (quality === 'medium') {
    return (
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          intensity={0.7}
          mipmapBlur
          levels={5}
        />
        <Vignette
          offset={0.3}
          darkness={0.7}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    )
  }

  if (!nexusCoreRef) {
    return (
      <EffectComposer multisampling={4}>
        <Bloom
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          intensity={1.5}
          mipmapBlur
          levels={8}
        />
        <Vignette
          offset={0.3}
          darkness={0.7}
          blendFunction={BlendFunction.NORMAL}
        />
        <ChromaticAberration
          offset={new Vector2(0.0008, 0.0008)}
          blendFunction={BlendFunction.NORMAL}
          radialModulation
          modulationOffset={0.5}
        />
      </EffectComposer>
    )
  }

  return (
    <EffectComposer multisampling={4}>
      <Bloom
        luminanceThreshold={0.4}
        luminanceSmoothing={0.9}
        intensity={1.5}
        mipmapBlur
        levels={8}
      />
      <Vignette
        offset={0.3}
        darkness={0.7}
        blendFunction={BlendFunction.NORMAL}
      />
      <ChromaticAberration
        offset={new Vector2(0.0008, 0.0008)}
        blendFunction={BlendFunction.NORMAL}
        radialModulation
        modulationOffset={0.5}
      />
      <GodRays
        sun={nexusCoreRef}
        blendFunction={BlendFunction.SCREEN}
        samples={40}
        density={0.98}
        decay={0.97}
        weight={0.7}
        exposure={0.6}
        clampMax={1}
        blur
      />
    </EffectComposer>
  )
}
