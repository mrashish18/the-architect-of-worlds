'use client';

import React from 'react';
import { Html } from '@react-three/drei';
import { useWorldStore } from '@/stores/useWorldStore';
import { WORLDS } from '@/config/worlds';
import type { WorldId } from '@/types';
import type { Vector3Tuple } from 'three';

interface WorldLabelProps {
  worldId: WorldId;
  position: Vector3Tuple;
}

const WorldLabel: React.FC<WorldLabelProps> = ({ worldId, position }) => {
  const { hoveredWorld } = useWorldStore();
  const isHovered = hoveredWorld === worldId;
  const worldConfig = WORLDS[worldId];

  return (
    <Html position={position} center zIndexRange={[100, 0]}>
      <div
        className={`glass px-4 py-2 flex flex-col items-center transition-all duration-300 pointer-events-none
          ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-2'}`}
      >
        <div
          className="w-8 h-1 mb-1 rounded-full"
          style={{ backgroundColor: worldConfig.colors.primary }}
        />
        <h3 className="font-heading text-sm text-white tracking-widest whitespace-nowrap text-glow">
          {worldConfig.name}
        </h3>
        <p className="font-sans text-xs text-white/60 whitespace-nowrap mt-1">
          {worldConfig.subtitle}
        </p>
      </div>
    </Html>
  );
};

export default React.memo(WorldLabel);
