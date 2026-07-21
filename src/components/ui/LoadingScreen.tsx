'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorldStore } from '@/stores/useWorldStore';

interface LoadingScreenProps {
  isLoaded: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoaded }) => {
  const { startIntro } = useWorldStore();
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    if (isLoaded) {
      startIntro();
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-pointer"
          onClick={handleClick}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Constellation Animation */}
          <div className="relative w-32 h-32 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse-glow">
              {/* Lines */}
              <line x1="20" y1="30" x2="50" y2="20" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
              <line x1="50" y1="20" x2="80" y2="40" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
              <line x1="80" y1="40" x2="60" y2="70" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
              <line x1="60" y1="70" x2="30" y2="60" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
              <line x1="30" y1="60" x2="20" y2="30" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
              <line x1="50" y1="20" x2="60" y2="70" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
              <line x1="30" y1="60" x2="80" y2="40" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
              
              {/* Dots */}
              <circle cx="20" cy="30" r="1.5" fill="#fff" className="animate-pulse" style={{ animationDelay: '0s' }} />
              <circle cx="50" cy="20" r="2" fill="#fff" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              <circle cx="80" cy="40" r="1.5" fill="#fff" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
              <circle cx="60" cy="70" r="2.5" fill="#fff" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              <circle cx="30" cy="60" r="1.5" fill="#fff" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            </svg>
          </div>

          <div className="text-center">
            {isLoaded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-heading text-xl md:text-2xl tracking-widest text-white animate-breathe"
              >
                Click to Enter
              </motion.div>
            ) : (
              <div className="font-heading text-xl md:text-2xl tracking-widest text-white/50 animate-pulse-glow">
                Initializing...
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(LoadingScreen);
