import { CognitiveStateIndicator } from '@/components/CognitiveStateIndicator';
import { LoopDetection } from '@/components/LoopDetection';
import { MultilingualProcessor } from '@/components/MultilingualProcessor';
import { FlowStatePreservation } from '@/components/FlowStatePreservation';
import { LoopOperation } from '@/components/LoopOperation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663111998939/USxuf8gh6yLibPRMWZUKk2/loopboard-hero-RL7YQWKWYmLByALb4Keyot.webp"
            alt="LoopBoard Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-accent"
            style={{ fontFamily: 'IBM Plex Mono' }}
          >
            LOOPBOARD
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-6">
            Adaptive Neurodivergent-Optimized Multilingual Input System
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flow-State Preservation • Cognitive Loop Detection • Seamless Multilingual Support
            (DE, ES, EN, QU)
          </p>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-accent"
            style={{ fontFamily: 'IBM Plex Mono' }}
          >
            CORE SUBSYSTEMS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NCAE */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3
                className="text-lg font-bold mb-3 text-accent"
                style={{ fontFamily: 'IBM Plex Mono' }}
              >
                NCAE
              </h3>
              <p className="text-sm text-foreground mb-2">
                Neurodivergent Cognitive Adaptation Engine
              </p>
              <p className="text-xs text-muted-foreground">
                Real-time cognitive state detection (HYPERFOCUS, SCANNING, TRANSITIONAL, FATIGUED).
                100ms sampling. Adaptive keyboard behavior per state.
              </p>
            </div>

            {/* SMMP */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3
                className="text-lg font-bold mb-3 text-accent"
                style={{ fontFamily: 'IBM Plex Mono' }}
              >
                SMMP
              </h3>
              <p className="text-sm text-foreground mb-2">
                Seamless Multilingual Morpheme Processor
              </p>
              <p className="text-xs text-muted-foreground">
                Morpheme-level language detection. DE+ES+EN+QU simultaneous. No manual switching.
                Shared probability space with soft transition boundaries.
              </p>
            </div>

            {/* FSPP */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3
                className="text-lg font-bold mb-3 text-accent"
                style={{ fontFamily: 'IBM Plex Mono' }}
              >
                FSPP
              </h3>
              <p className="text-sm text-foreground mb-2">
                Flow-State Preservation Protocol
              </p>
              <p className="text-xs text-muted-foreground">
                Disruption cost model. Budget system per cognitive state. HYPERFOCUS = 0 budget
                (zero interruptions). FATIGUED = 40/min (max assistance).
              </p>
            </div>

            {/* CLDAS */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3
                className="text-lg font-bold mb-3 text-accent"
                style={{ fontFamily: 'IBM Plex Mono' }}
              >
                CLDAS
              </h3>
              <p className="text-sm text-foreground mb-2">
                Cognitive Loop Detection and Amplification System
              </p>
              <p className="text-xs text-muted-foreground">
                Micro/Meso/Macro loop detection. Repetition = INTENTIONAL, never error.
                Auto-promotes recurring patterns to shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demonstrations */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-accent"
            style={{ fontFamily: 'IBM Plex Mono' }}
          >
            LIVE DEMONSTRATIONS
          </h2>

          <div className="space-y-8">
            {/* Cognitive State Indicator */}
            <CognitiveStateIndicator animated={true} />

            {/* Loop Detection */}
            <LoopDetection />

            {/* Multilingual Processor */}
            <MultilingualProcessor />

            {/* Flow State Preservation */}
            <FlowStatePreservation />

            {/* LoopOperation */}
            <LoopOperation />

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="w-full py-16 px-4 md:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8 text-accent"
            style={{ fontFamily: 'IBM Plex Mono' }}
          >
            CORE PRINCIPLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Local Processing',
                desc: 'All processing LOCAL — zero external data transmission',
              },
              {
                title: 'UTF-8 Sanitization',
                desc: 'Strips invisible Unicode, ZWJ, BOM, RTL marks. Clean output guaranteed.',
              },
              {
                title: 'User Sovereignty',
                desc: 'Keyboard is input device, not content moderator. Zero filtering.',
              },
              {
                title: 'Repetition is Intentional',
                desc: 'Never treat loops as errors. Amplify and promote to shortcuts.',
              },
              {
                title: 'Flow is Sacred',
                desc: 'Interruption has measurable cognitive cost. Protect hyperfocus.',
              },
              {
                title: 'Neurodivergent-First',
                desc: 'Neurodivergent brains are not broken — keyboards are.',
              },
            ].map((principle, i) => (
              <div key={i} className="p-4 bg-background rounded border border-border">
                <h3 className="text-sm font-bold text-accent mb-2">{principle.title}</h3>
                <p className="text-xs text-muted-foreground">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 md:px-8 bg-card/50 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-xs text-muted-foreground">
          <p>LoopBoard 2026 • For everyone whose brain works differently</p>
          <p className="mt-2">Your keyboard should too.</p>
        </div>
      </footer>
    </div>
  );
}
