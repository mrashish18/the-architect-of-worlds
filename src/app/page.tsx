'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/ui/LoadingScreen'
import TitleOverlay from '@/components/ui/TitleOverlay'
import IntroSequence from '@/components/ui/IntroSequence'
import AudioToggle from '@/components/ui/AudioToggle'
import DiscoveryHUD from '@/components/ui/DiscoveryHUD'
import Toolbar from '@/components/ui/Toolbar'
import NovaChat from '@/components/ui/nova/NovaChat'
import DiscoveryLog from '@/components/ui/nova/DiscoveryLog'
import { TransitionWipe } from '@/components/effects/TransitionWipe'
import { AudioManager } from '@/components/audio/AudioManager'
import { useWorldNavigation } from '@/hooks/useWorldNavigation'
import { useWorldStore } from '@/stores/useWorldStore'

const SceneCanvas = dynamic(
  () => import('@/components/canvas/SceneCanvas'),
  {
    ssr: false,
    loading: () => null,
  },
)

function NavigationHandler() {
  useWorldNavigation()
  return null
}


export default function HomePage() {
  const [sceneReady, setSceneReady] = useState(false)
  const { photoMode } = useWorldStore()

  const handleSceneReady = useCallback(() => {
    setSceneReady(true)
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      {/* 3D Canvas */}
      <div className="canvas-container">
        <SceneCanvas onCreated={handleSceneReady} />
      </div>

      {/* UI Overlay */}
      <div className="ui-overlay">
        <LoadingScreen isLoaded={sceneReady} />
        {!photoMode && (
          <>
            <IntroSequence />
            <TitleOverlay />
            <DiscoveryHUD />
            <NovaChat />
            <DiscoveryLog />
            <AudioToggle />
          </>
        )}
        <Toolbar />
        <TransitionWipe />
      </div>

      {/* Non-visual */}
      <NavigationHandler />
      <AudioManager />
    </main>
  )
}
