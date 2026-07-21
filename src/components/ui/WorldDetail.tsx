'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorldStore } from '@/stores/useWorldStore';
import { WORLDS } from '@/config/worlds';
import { HiXMark } from 'react-icons/hi2';

const worldsWithNativeUI = ['emerald', 'forge', 'ocean', 'singularity'];

const WorldDetail: React.FC = () => {
  const { activeWorld, isDetailOpen, closeDetail, isIntroComplete, setNovaOpen } = useWorldStore();
  const [isOpen, setIsOpen] = useState(false);
  const [hasNativeUI, setHasNativeUI] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeWorld && isDetailOpen && !worldsWithNativeUI.includes(activeWorld)) {
      setIsOpen(true);
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
      setHasNativeUI(worldsWithNativeUI.includes(activeWorld));
    } else {
      setIsOpen(false);
      setHasNativeUI(worldsWithNativeUI.includes(activeWorld || ''));
    }
  }, [activeWorld, isDetailOpen]);
  
  const worldConfig = activeWorld ? WORLDS[activeWorld] : null;

  if (!isIntroComplete || !isDetailOpen || !activeWorld || hasNativeUI) return null;

  return (
    <AnimatePresence>
      {isOpen && worldConfig && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 z-40 h-full w-full max-w-[480px] glass-strong flex flex-col"
        >
          {/* Decorative Edge Border */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{
              background: `linear-gradient(to bottom, transparent, ${worldConfig.colors.primary}, ${worldConfig.colors.secondary}, transparent)`,
            }}
          />

          <div className="flex-1 overflow-y-auto p-8 relative">
            <button
              onClick={closeDetail}
              className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Close details"
            >
              <HiXMark className="text-white text-xl" />
            </button>

            <div className="mt-8">
              <h2 className="font-heading text-4xl text-white tracking-widest text-glow mb-2">
                {worldConfig.name}
              </h2>
              <div
                className="w-16 h-1 rounded-full mb-6"
                style={{ backgroundColor: worldConfig.colors.primary }}
              />
              <p className="font-sans text-lg text-white/80 italic mb-8">
                {worldConfig.subtitle}
              </p>
              
              <motion.div 
                className="prose prose-invert max-w-none font-sans text-white/70 leading-relaxed"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {worldConfig.description.split('\n').filter(Boolean).map((paragraph, idx) => (
                  <motion.p 
                    key={idx} 
                    className="mb-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <button
                  onClick={() => setNovaOpen(true)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 glass border border-white/20 rounded text-white font-heading tracking-widest text-sm transition-all"
                >
                  ASK NOVA
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(WorldDetail);
