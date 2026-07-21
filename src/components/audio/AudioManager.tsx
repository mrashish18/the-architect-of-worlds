'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useAudioStore } from '@/stores/useAudioStore'
import { useWorldStore } from '@/stores/useWorldStore'

export function AudioManager() {
  const { isMuted, volume, setContextReady } = useAudioStore()
  const { isIntroStarted, activeWorld } = useWorldStore()
  const ctxRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const dronesRef = useRef<OscillatorNode[]>([])
  const isInitRef = useRef(false)

  const initAudio = useCallback(() => {
    if (isInitRef.current) return
    isInitRef.current = true

    try {
      const ctx = new AudioContext()
      ctxRef.current = ctx

      const masterGain = ctx.createGain()
      masterGain.gain.value = volume
      masterGain.connect(ctx.destination)
      gainRef.current = masterGain

      // Base drone — deep sub-bass
      const osc1 = ctx.createOscillator()
      osc1.type = 'sine'
      osc1.frequency.value = 55
      const g1 = ctx.createGain()
      g1.gain.value = 0.12
      osc1.connect(g1).connect(masterGain)
      osc1.start()
      dronesRef.current.push(osc1)

      // Harmonic — fifth above
      const osc2 = ctx.createOscillator()
      osc2.type = 'sine'
      osc2.frequency.value = 82.5
      const g2 = ctx.createGain()
      g2.gain.value = 0.06
      osc2.connect(g2).connect(masterGain)
      osc2.start()
      dronesRef.current.push(osc2)

      // High shimmer — filtered noise
      const bufferSize = ctx.sampleRate * 2
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const output = noiseBuffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.3
      }

      const noise = ctx.createBufferSource()
      noise.buffer = noiseBuffer
      noise.loop = true

      const bandpass = ctx.createBiquadFilter()
      bandpass.type = 'bandpass'
      bandpass.frequency.value = 800
      bandpass.Q.value = 2

      const noiseGain = ctx.createGain()
      noiseGain.gain.value = 0.04

      noise.connect(bandpass).connect(noiseGain).connect(masterGain)
      noise.start()

      setContextReady()
    } catch {
      // Audio context creation failed silently
    }
  }, [volume, setContextReady])

  // Initialize audio on intro start
  useEffect(() => {
    if (isIntroStarted) initAudio()
  }, [isIntroStarted, initAudio])

  // Update volume/mute
  useEffect(() => {
    if (!gainRef.current) return
    gainRef.current.gain.setTargetAtTime(
      isMuted ? 0 : volume,
      ctxRef.current?.currentTime || 0,
      0.3,
    )
  }, [isMuted, volume])

  // Cleanup
  useEffect(() => {
    const drones = dronesRef.current
    const ctx = ctxRef.current
    return () => {
      drones.forEach((osc) => {
        try { osc.stop() } catch { /* already stopped */ }
      })
      ctx?.close()
    }
  }, [])

  // UI interaction chime on activeWorld change
  useEffect(() => {
    if (!activeWorld || !ctxRef.current || !gainRef.current || isMuted) return

    try {
      const ctx = ctxRef.current
      
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      
      // Soft high-pitched synth pluck
      osc.type = 'sine'
      osc.frequency.setValueAtTime(880, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1)
      
      // Quick exponential decay envelope
      gain.gain.setValueAtTime(0, ctx.currentTime)
      gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
      
      osc.connect(gain)
      gain.connect(gainRef.current)
      
      osc.start()
      osc.stop(ctx.currentTime + 0.6)
    } catch {
      // Ignore audio errors
    }
  }, [activeWorld, isMuted])

  return null
}
