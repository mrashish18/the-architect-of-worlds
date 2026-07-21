'use client'

import { QualityTier } from '@/types'
import { CinematicCamera } from '@/components/camera/CinematicCamera'
import SpaceLighting from '@/components/environment/SpaceLighting'
import { ProceduralUniverse } from '@/components/environment/ProceduralUniverse'
import FloatingRocks from '@/components/environment/FloatingRocks'
import Comets from '@/components/environment/Comets'
import Nebula from '@/components/environment/Nebula'
import { SceneEffects } from './SceneEffects'

import { NexusWorld } from '@/components/worlds/NexusWorld'
import { EmeraldIsle } from '@/components/worlds/EmeraldIsle'
import { ForgePlanet } from '@/components/worlds/ForgePlanet'
import { OceanWorld } from '@/components/worlds/OceanWorld'
import { CrystalMoon } from '@/components/worlds/CrystalMoon'
import { SingularityWorld } from '@/components/worlds/SingularityWorld'
import { SecretPlanet } from '@/components/worlds/SecretPlanet'

interface SceneContentProps {
  quality: QualityTier
}

export function SceneContent({ quality }: SceneContentProps) {
  return (
    <>
      <CinematicCamera />
      <SpaceLighting />

      {/* Core Planets */}
      <NexusWorld />
      <EmeraldIsle />
      <ForgePlanet />
      <OceanWorld />
      <CrystalMoon />
      <SingularityWorld />
      <SecretPlanet />

      {/* Procedural Background Decor */}
      <ProceduralUniverse />

      {/* Atmospheric Effects */}
      {quality !== 'low' && <Nebula />}
      {quality !== 'low' && <Comets />}
      <FloatingRocks />

      {/* Postprocessing */}
      <SceneEffects quality={quality} />
    </>
  )
}
