'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWorldStore } from '@/stores/useWorldStore'
import CosmicScanner from './CosmicScanner'

export default function Toolbar() {
  const { isIntroComplete, photoMode, setPhotoMode, autoTour, setAutoTour } = useWorldStore()
  const [scannerOpen, setScannerOpen] = useState(false)

  if (!isIntroComplete) return null

  if (photoMode) {
    return (
      <div className="absolute bottom-6 right-6 z-50">
        <button 
          onClick={() => setPhotoMode(false)}
          className="px-4 py-2 bg-black/60 hover:bg-white/20 border border-white/20 rounded-md text-white/50 hover:text-white font-heading text-xs tracking-widest backdrop-blur-md transition-all"
        >
          [ EXIT PHOTO MODE ]
        </button>
      </div>
    )
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2"
      >
        <button 
          onClick={() => setScannerOpen(!scannerOpen)}
          className={`px-6 py-2 bg-black/40 hover:bg-white/10 border ${scannerOpen ? 'border-cyan-400 text-cyan-300' : 'border-white/20 text-white'} rounded-l-xl font-heading text-xs tracking-[0.2em] backdrop-blur-md transition-all`}
        >
          SCANNER
        </button>
        <button 
          onClick={() => setAutoTour(!autoTour)}
          className={`px-6 py-2 bg-black/40 hover:bg-white/10 border ${autoTour ? 'border-purple-400 text-purple-300' : 'border-white/20 text-white'} font-heading text-xs tracking-[0.2em] backdrop-blur-md transition-all`}
        >
          AUTO TOUR
        </button>
        <button 
          onClick={() => setPhotoMode(true)}
          className="px-6 py-2 bg-black/40 hover:bg-white/10 border border-white/20 rounded-r-xl text-white font-heading text-xs tracking-[0.2em] backdrop-blur-md transition-all"
        >
          PHOTO MODE
        </button>
      </motion.div>

      <AnimatePresence>
        {scannerOpen && <CosmicScanner onClose={() => setScannerOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
