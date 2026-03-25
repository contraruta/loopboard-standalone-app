import React, { useState, useEffect } from 'react';

type CognitiveState = 'HYPERFOCUS' | 'SCANNING' | 'TRANSITIONAL' | 'FATIGUED';

interface CognitiveStateIndicatorProps {
  currentState?: CognitiveState;
  animated?: boolean;
}

const stateConfig: Record<CognitiveState, { color: string; description: string; budget: number }> = {
  HYPERFOCUS: {
    color: '#FF6B35',
    description: 'Peak focus. Zero interruptions allowed.',
    budget: 0,
  },
  SCANNING: {
    color: '#00FF41',
    description: 'Active exploration. Minimal assistance.',
    budget: 5,
  },
  TRANSITIONAL: {
    color: '#6B5BFF',
    description: 'Shifting states. Moderate support.',
    budget: 20,
  },
  FATIGUED: {
    color: '#B0B0B0',
    description: 'Low energy. Maximum assistance.',
    budget: 40,
  },
};

export function CognitiveStateIndicator({
  currentState = 'SCANNING',
  animated = true,
}: CognitiveStateIndicatorProps) {
  const [displayState, setDisplayState] = useState<CognitiveState>(currentState);
  const config = stateConfig[displayState];

  useEffect(() => {
    if (!animated) return;
    const interval = setInterval(() => {
      const states: CognitiveState[] = ['HYPERFOCUS', 'SCANNING', 'TRANSITIONAL', 'FATIGUED'];
      const currentIndex = states.indexOf(displayState);
      setDisplayState(states[(currentIndex + 1) % states.length]);
    }, 4000);
    return () => clearInterval(interval);
  }, [displayState, animated]);

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'IBM Plex Mono' }}>
        COGNITIVE STATE DETECTOR
      </h3>

      {/* Circular Gauge */}
      <div className="relative w-48 h-48">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{
            filter: `drop-shadow(0 0 20px ${config.color})`,
          }}
        >
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#2a4a6a"
            strokeWidth="2"
          />

          {/* Animated indicator arc */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={config.color}
            strokeWidth="3"
            strokeDasharray="565"
            strokeDashoffset="0"
            style={{
              animation: animated ? `pulse 2s ease-in-out infinite` : 'none',
              opacity: 0.8,
            }}
          />

          {/* State label in center */}
          <text
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={config.color}
            fontSize="24"
            fontWeight="bold"
            fontFamily="IBM Plex Mono"
            style={{
              animation: animated ? `glow 2s ease-in-out infinite` : 'none',
            }}
          >
            {displayState}
          </text>
        </svg>
      </div>

      {/* State Info */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">{config.description}</p>
        <div className="flex items-center justify-center gap-4">
          <span className="text-xs font-mono text-foreground">
            DISRUPTION BUDGET: {config.budget}/min
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            stroke-dashoffset: 565;
            opacity: 0.8;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px currentColor);
          }
          50% {
            filter: drop-shadow(0 0 15px currentColor);
          }
        }
      `}</style>
    </div>
  );
}
