import React, { useState, useEffect } from 'react';

interface DisruptionEvent {
  id: string;
  type: string;
  timestamp: number;
  blocked: boolean;
}

export function FlowStatePreservation() {
  const [disruptions, setDisruptions] = useState<DisruptionEvent[]>([]);
  const [flowScore, setFlowScore] = useState(95);
  const [isFlowing, setIsFlowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFlowing) {
        const types = ['notification', 'autocorrect', 'suggestion', 'alert'];
        const newDisruption: DisruptionEvent = {
          id: Math.random().toString(),
          type: types[Math.floor(Math.random() * types.length)],
          timestamp: Date.now(),
          blocked: Math.random() > 0.3,
        };

        setDisruptions((prev) => [newDisruption, ...prev.slice(0, 9)]);
        setFlowScore((prev) => Math.max(0, prev + (newDisruption.blocked ? 2 : -5)));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isFlowing]);

  const blockedCount = disruptions.filter((d) => d.blocked).length;
  const totalCount = disruptions.length;

  return (
    <div className="flex flex-col gap-6 p-8 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'IBM Plex Mono' }}>
        FLOW-STATE PRESERVATION PROTOCOL
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Flow Score */}
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            FLOW SCORE
          </h4>
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#2a4a6a"
                strokeWidth="2"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#00FF41"
                strokeWidth="3"
                strokeDasharray={`${(flowScore / 100) * 314} 314`}
                strokeLinecap="round"
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: '60px 60px',
                  transition: 'stroke-dasharray 0.5s ease',
                }}
              />
              <text
                x="60"
                y="60"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#00FF41"
                fontSize="28"
                fontWeight="bold"
                fontFamily="IBM Plex Mono"
              >
                {flowScore}
              </text>
            </svg>
          </div>
          <button
            onClick={() => setIsFlowing(!isFlowing)}
            className={`px-4 py-2 rounded border-2 text-xs font-mono transition-all ${
              isFlowing
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-border text-foreground'
            }`}
          >
            {isFlowing ? 'FLOWING' : 'PAUSED'}
          </button>
        </div>

        {/* Disruption Stats */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            DISRUPTION STATS
          </h4>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">BLOCKED</p>
              <p className="text-2xl font-mono text-accent">{blockedCount}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">TOTAL DETECTED</p>
              <p className="text-2xl font-mono text-foreground">{totalCount}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">BLOCK RATE</p>
              <p className="text-2xl font-mono text-accent">
                {totalCount > 0 ? Math.round((blockedCount / totalCount) * 100) : 0}%
              </p>
            </div>
          </div>
        </div>

        {/* Recent Disruptions */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            RECENT EVENTS
          </h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {disruptions.length === 0 ? (
              <p className="text-xs text-muted-foreground">No disruptions detected</p>
            ) : (
              disruptions.map((d) => (
                <div
                  key={d.id}
                  className={`p-2 rounded text-xs font-mono ${
                    d.blocked
                      ? 'bg-accent/10 text-accent'
                      : 'bg-destructive/10 text-destructive'
                  }`}
                >
                  <span>{d.blocked ? '✓' : '✗'}</span> {d.type}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="p-4 bg-background rounded border border-border">
        <p className="text-xs text-muted-foreground mb-3">CORE PRINCIPLES</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="flex gap-2">
            <span className="text-accent">→</span>
            <span className="text-foreground">Zero interruptions during HYPERFOCUS</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent">→</span>
            <span className="text-foreground">Adaptive disruption budget per state</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent">→</span>
            <span className="text-foreground">Flow is sacred - interruption has cost</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent">→</span>
            <span className="text-foreground">Quantified disruption management</span>
          </div>
        </div>
      </div>
    </div>
  );
}
