import { create } from 'zustand'
import { WorldId } from '@/types'
import * as THREE from 'three'

export interface CelestialObject {
  id: string
  type: 'star' | 'planet' | 'comet' | 'asteroid' | 'pulsar' | 'quasar' | 'station' | 'ruins' | 'nebula'
  name: string
  position: THREE.Vector3
}

interface WorldState {
  activeWorld: WorldId | null
  hoveredWorld: WorldId | null
  activeObject: CelestialObject | null
  hoveredObject: CelestialObject | null
  isIntroComplete: boolean
  isIntroStarted: boolean
  isTransitioning: boolean
  isDetailOpen: boolean
  isNovaOpen: boolean
  hasInteracted: boolean
  nexusCoreRef: THREE.Mesh | null
  visitedObjects: string[]
  discoveredObjects: Record<string, CelestialObject>
  visitedSectors: string[]
  currentCoordinates: THREE.Vector3
  photoMode: boolean
  autoTour: boolean

  navigateToWorld: (id: WorldId | null) => void
  navigateToObject: (obj: CelestialObject | null) => void
  addDiscoveredObject: (obj: CelestialObject) => void
  updateCoordinates: (coords: THREE.Vector3) => void
  setHovered: (id: WorldId | null) => void
  setHoveredObject: (obj: CelestialObject | null) => void
  startIntro: () => void
  completeIntro: () => void
  setTransitioning: (transitioning: boolean) => void
  openDetail: () => void
  closeDetail: () => void
  setNovaOpen: (isOpen: boolean) => void
  setInteracted: () => void
  setNexusCoreRef: (ref: THREE.Mesh | null) => void
  setPhotoMode: (enabled: boolean) => void
  setAutoTour: (enabled: boolean) => void
}

export const useWorldStore = create<WorldState>((set, get) => ({
  activeWorld: null,
  hoveredWorld: null,
  activeObject: null,
  hoveredObject: null,
  isIntroComplete: false,
  isIntroStarted: false,
  isTransitioning: false,
  isDetailOpen: false,
  isNovaOpen: false,
  hasInteracted: false,
  nexusCoreRef: null,
  visitedObjects: [],
  discoveredObjects: {},
  visitedSectors: [],
  currentCoordinates: new THREE.Vector3(0, 0, 0),
  photoMode: false,
  autoTour: false,

  navigateToWorld: (id) => {
    if (get().isTransitioning) return
    const visited = get().visitedObjects
    if (id && !visited.includes(id)) {
      set({ visitedObjects: [...visited, id] })
    }
    set({ activeWorld: id, activeObject: null, isDetailOpen: false })
  },

  navigateToObject: (obj) => {
    if (get().isTransitioning) return
    const visited = get().visitedObjects
    if (obj && !visited.includes(obj.id)) {
      set({ visitedObjects: [...visited, obj.id] })
    }
    set({ activeObject: obj, activeWorld: null, isDetailOpen: false })
  },

  addDiscoveredObject: (obj) => {
    set((state) => ({
      discoveredObjects: { ...state.discoveredObjects, [obj.id]: obj },
      visitedObjects: state.visitedObjects.includes(obj.id) ? state.visitedObjects : [...state.visitedObjects, obj.id]
    }))
  },

  updateCoordinates: (coords) => set({ currentCoordinates: coords }),

  setHovered: (id) => {
    if (get().isTransitioning) return
    set({ hoveredWorld: id, hoveredObject: null })
  },

  setHoveredObject: (obj) => {
    if (get().isTransitioning) return
    set({ hoveredObject: obj, hoveredWorld: null })
  },

  startIntro: () => set({ isIntroStarted: true }),
  completeIntro: () => set({ isIntroComplete: true }),
  setTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
  openDetail: () => set({ isDetailOpen: true }),
  closeDetail: () => set({ isDetailOpen: false, isNovaOpen: false }),
  setNovaOpen: (isOpen) => set({ isNovaOpen: isOpen }),
  setInteracted: () => set({ hasInteracted: true }),
  setNexusCoreRef: (ref) => set({ nexusCoreRef: ref }),
  setPhotoMode: (enabled) => set({ photoMode: enabled }),
  setAutoTour: (enabled) => set({ autoTour: enabled }),
}))
