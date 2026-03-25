import React, { useState, useEffect } from 'react';

interface Loop {
  id: string;
  pattern: string;
  count: number;
  type: 'constructive' | 'destructive';
  detected: boolean;
}

export function LoopDetection() {
  const [loops, setLoops] = useState<Loop[]>([
    {
      id: '1',
      pattern: 'abc',
      count: 3,
      type: 'constructive',
      detected: true,
    },
    {
      id: '2',
      pattern: 'xxx',
      count: 5,
      type: 'destructive',
      detected: true,
    },
    {
      id: '3',
      pattern: 'flow',
      count: 2,
      type: 'constructive',
      detected: false,
    },
  ]);

  const [activeLoopId, setActiveLoopId] = useState<string>('1');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoops((prev) =>
        prev.map((loop) => ({
          ...loop,
          count: loop.count + (Math.random() > 0.5 ? 1 : 0),
          detected: loop.count >= 3,
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-8 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'IBM Plex Mono' }}>
        LOOP DETECTION & AMPLIFICATION SYSTEM
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Loop Visualization */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            DETECTED LOOPS
          </h4>
          <div className="space-y-3">
            {loops.map((loop) => (
              <button
                key={loop.id}
                onClick={() => setActiveLoopId(loop.id)}
                className={`p-3 rounded border-2 transition-all ${
                  activeLoopId === loop.id
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm font-mono text-foreground">Pattern: {loop.pattern}</p>
                    <p className="text-xs text-muted-foreground">
                      Count: {loop.count} | Type: {loop.type}
                    </p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      loop.type === 'constructive'
                        ? 'bg-accent'
                        : 'bg-destructive'
                    }`}
                    style={{
                      boxShadow: `0 0 ${loop.detected ? 10 : 0}px ${
                        loop.type === 'constructive' ? '#00FF41' : '#FF0000'
                      }`,
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Loop Analysis */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            ANALYSIS
          </h4>
          {loops.find((l) => l.id === activeLoopId) && (
            <div className="space-y-3 p-4 bg-background rounded border border-border">
              {(() => {
                const loop = loops.find((l) => l.id === activeLoopId)!;
                return (
                  <>
                    <div>
                      <p className="text-xs text-muted-foreground">PATTERN</p>
                      <p className="text-lg font-mono text-foreground">{loop.pattern}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">REPETITION COUNT</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-border rounded overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              loop.type === 'constructive'
                                ? 'bg-accent'
                                : 'bg-destructive'
                            }`}
                            style={{ width: `${Math.min((loop.count / 10) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm font-mono text-foreground">{loop.count}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">STATUS</p>
                      <p
                        className={`text-sm font-mono ${
                          loop.detected
                            ? 'text-accent'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {loop.detected ? '✓ DETECTED' : '○ MONITORING'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">ACTION</p>
                      <p className="text-sm text-foreground">
                        {loop.type === 'constructive'
                          ? 'Amplify & promote to shortcut'
                          : 'Monitor for intervention'}
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-foreground">Constructive Loop</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-destructive" />
          <span className="text-foreground">Destructive Loop</span>
        </div>
      </div>
    </div>
  );
}
