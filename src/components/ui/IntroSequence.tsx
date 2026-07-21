'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWorldStore } from '@/stores/useWorldStore'

export default function IntroSequence() {
  const { isIntroStarted, isIntroComplete } = useWorldStore()
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isIntroStarted || isIntroComplete) return

    const t1 = setTimeout(() => setStep(1), 2000) // "Welcome to the Cosmic Workshop."
    const t2 = setTimeout(() => setStep(2), 5500) // "Every world tells a story."
    const t3 = setTimeout(() => setStep(3), 8500) // "Every story is a part of me."
    const t4 = setTimeout(() => setStep(4), 11500) // End sequence

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [isIntroStarted, isIntroComplete])

  if (!isIntroStarted || isIntroComplete) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.h1
            key="step1"
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="text-3xl md:text-5xl font-heading text-white tracking-widest text-glow"
          >
            Welcome to the Cosmic Workshop.
          </motion.h1>
        )}
        {step === 2 && (
          <motion.h1
            key="step2"
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="text-2xl md:text-4xl font-heading text-white/90 tracking-widest text-glow"
          >
            Every world tells a story.
          </motion.h1>
        )}
        {step === 3 && (
          <motion.h1
            key="step3"
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="text-4xl md:text-6xl font-heading text-cyan-200 tracking-widest text-glow shadow-[0_0_30px_rgba(0,255,255,0.3)]"
          >
            Every story is a part of me.
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  )
}
