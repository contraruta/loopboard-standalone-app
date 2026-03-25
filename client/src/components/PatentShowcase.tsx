import React, { useState } from 'react';

interface Claim {
  number: number;
  title: string;
  description: string;
  type: 'independent' | 'dependent';
}

const claims: Claim[] = [
  {
    number: 1,
    title: 'Complete System',
    description: 'NCAE + SMMP + FSPP + CLDAS + ULPC integrated system',
    type: 'independent',
  },
  {
    number: 2,
    title: 'Flow-State Preservation',
    description: 'Method for preserving cognitive flow during text input',
    type: 'independent',
  },
  {
    number: 3,
    title: 'Multilingual Input',
    description: 'Method for seamless multilingual input without manual switching',
    type: 'independent',
  },
  {
    number: 4,
    title: 'Loop Detection',
    description: 'Method for cognitive loop detection and amplification',
    type: 'independent',
  },
  {
    number: 5,
    title: 'Local Processing',
    description: 'System with local-only processing, zero external transmission',
    type: 'dependent',
  },
  {
    number: 6,
    title: 'UTF-8 Sanitization',
    description: 'UTF-8 sanitization layer for clean output',
    type: 'dependent',
  },
];

export function PatentShowcase() {
  const [selectedClaim, setSelectedClaim] = useState<number>(1);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['technical-field'])
  );

  const toggleSection = (section: string) => {
    const newSet = new Set(expandedSections);
    if (newSet.has(section)) {
      newSet.delete(section);
    } else {
      newSet.add(section);
    }
    setExpandedSections(newSet);
  };

  const selectedClaimData = claims.find((c) => c.number === selectedClaim);

  const sections = [
    {
      id: 'technical-field',
      title: 'TECHNICAL FIELD',
      content:
        'G06F 3/023 — Keyboards, G06F 3/04886 — Virtual keyboards, G06F 40/40 — Multilingual NLP',
    },
    {
      id: 'background',
      title: 'BACKGROUND',
      content:
        'Existing keyboard systems fail neurodivergent users. No cognitive state adaptation. No loop recognition. No flow preservation.',
    },
    {
      id: 'summary',
      title: 'SUMMARY OF INVENTION',
      content:
        'LoopBoard provides adaptive neurodivergent-optimized input with real-time cognitive state detection, seamless multilingual support, flow-state preservation, and intelligent loop detection.',
    },
    {
      id: 'abstract',
      title: 'ABSTRACT',
      content:
        'A keyboard system that adapts to neurodivergent cognitive states, preserves flow, supports multiple languages at morpheme level, and amplifies intentional repetition patterns.',
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-8 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'IBM Plex Mono' }}>
        PATENT APPLICATION: LLI-PAT-012
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Patent Sections */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            PATENT STRUCTURE
          </h4>
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className="w-full p-3 rounded border border-border hover:border-accent/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-mono text-foreground">{section.title}</p>
                  <span className="text-accent">
                    {expandedSections.has(section.id) ? '−' : '+'}
                  </span>
                </div>
                {expandedSections.has(section.id) && (
                  <p className="text-xs text-muted-foreground mt-2">{section.content}</p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Claims */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            CLAIMS (12 TOTAL)
          </h4>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {claims.map((claim) => (
              <button
                key={claim.number}
                onClick={() => setSelectedClaim(claim.number)}
                className={`w-full p-2 rounded border-2 transition-all text-left ${
                  selectedClaim === claim.number
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      claim.type === 'independent' ? 'text-accent' : 'text-secondary'
                    }`}
                  >
                    {claim.number}
                  </span>
                  <span className="text-xs text-foreground">{claim.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Claim Details */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            CLAIM DETAILS
          </h4>
          {selectedClaimData && (
            <div className="p-4 bg-background rounded border border-border space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">NUMBER</p>
                <p className="text-sm font-mono text-foreground">Claim {selectedClaimData.number}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">TYPE</p>
                <p
                  className={`text-sm font-mono ${
                    selectedClaimData.type === 'independent' ? 'text-accent' : 'text-secondary'
                  }`}
                >
                  {selectedClaimData.type.toUpperCase()}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">TITLE</p>
                <p className="text-sm font-mono text-foreground">{selectedClaimData.title}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">DESCRIPTION</p>
                <p className="text-xs text-foreground">{selectedClaimData.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filing Information */}
      <div className="p-4 bg-background rounded border border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <p className="text-muted-foreground mb-1">FILING ENTITY</p>
            <p className="text-foreground font-mono">LoopLord Industries UG</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">PATENT NUMBER</p>
            <p className="text-foreground font-mono">LLI-PAT-012</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">DATE</p>
            <p className="text-foreground font-mono">2026-02-28</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">STATUS</p>
            <p className="text-accent font-mono">INVICTUS</p>
          </div>
        </div>
      </div>

      {/* Core Innovation */}
      <div className="p-4 bg-background rounded border border-border">
        <p className="text-xs text-muted-foreground mb-2">CORE INNOVATION</p>
        <p className="text-sm text-foreground">
          First input system to combine neurodivergent cognitive state adaptation, flow-state
          preservation, seamless multilingual processing at morpheme level, and cognitive loop
          amplification. No known prior art addressing this complete feature combination.
        </p>
      </div>
    </div>
  );
}
