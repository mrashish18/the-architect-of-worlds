import type { Vector3Tuple } from 'three'

export type WorldId =
  | 'nexus'
  | 'emerald'
  | 'forge'
  | 'ocean'
  | 'crystal'
  | 'singularity'
  | 'secret'

export interface WorldConfig {
  id: WorldId
  name: string
  subtitle: string
  description: string
  position: Vector3Tuple
  colors: {
    primary: string
    secondary: string
    atmosphere: string
    accent: string
  }
  orbitSpeed: number
  scale: number
}

export interface CameraState {
  position: Vector3Tuple
  target: Vector3Tuple
}

export interface CameraWaypoint extends CameraState {
  duration: number
  ease?: string
}

export type QualityTier = 'high' | 'medium' | 'low'
