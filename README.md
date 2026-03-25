# LoopBoard Standalone App

**Adaptive Neurodivergent-Optimized Multilingual Input System with Flow-State Preservation and Cognitive Loop Detection**

A comprehensive React application demonstrating the core concepts and architecture of the LoopBoard keyboard system. This standalone app showcases all four subsystems (NCAE, SMMP, FSPP, CLDAS) with interactive demonstrations and live visualizations.

## 🎯 Overview

LoopBoard is designed for neurodivergent users—particularly those with ADHD—who struggle with standard keyboard systems that interrupt flow states, treat repetition as errors, and lack adaptive cognitive support. This standalone app is a fully interactive demonstration of the LoopBoard philosophy and technology.

### Core Subsystems

| Subsystem | Full Name | Purpose |
|-----------|-----------|---------|
| **NCAE** | Neurodivergent Cognitive Adaptation Engine | Real-time cognitive state detection (HYPERFOCUS, SCANNING, TRANSITIONAL, FATIGUED) with 100ms sampling |
| **SMMP** | Seamless Multilingual Morpheme Processor | Morpheme-level language detection supporting German, Spanish, English, and Quechua simultaneously |
| **FSPP** | Flow-State Preservation Protocol | Disruption cost model with adaptive budgets based on cognitive state |
| **CLDAS** | Cognitive Loop Detection and Amplification System | Recognition and amplification of cognitive loops into shortcuts |

## ✨ Features

- **Interactive Cognitive State Detector** – Watch real-time state transitions with animated gauges
- **Loop Detection & Amplification** – See how repetitive patterns are recognized and promoted to shortcuts
- **Multilingual Processor** – Seamless morpheme-level language switching across four languages
- **Flow State Preservation** – Visual representation of disruption budgets and flow protection
- **LoopOperation Task Manager** – Neurodivergent-optimized task execution without time pressure

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or pnpm 10+
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone or extract the project
cd loopboard-standalone-app

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm run build
pnpm run preview
```

## 📁 Project Structure

```
loopboard-standalone-app/
├── client/
│   ├── public/              # Static assets (favicon, manifest)
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── CognitiveStateIndicator.tsx
│   │   │   ├── LoopDetection.tsx
│   │   │   ├── MultilingualProcessor.tsx
│   │   │   ├── FlowStatePreservation.tsx
│   │   │   ├── LoopOperation.tsx
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles with Tailwind
│   └── index.html           # HTML template
├── server/                  # Express server (placeholder)
├── shared/                  # Shared constants
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Color Palette

The app uses a **neuromechanical aesthetic** optimized for neurodivergent users:

- **Primary Background**: `#0A1E3F` (Deep Dark Blue)
- **Primary Accent**: `#00FF41` (Neon Green)
- **Secondary Accent**: `#FF6B35` (Warm Orange)
- **Text**: `#F5F5F5` (Light Gray)
- **Muted**: `#4a6a8a` (Muted Blue-Gray)

### Typography

- **Headlines**: IBM Plex Mono (Bold)
- **Body**: Inter (Regular, 400-700)
- **Code**: Fira Code (Regular, 500)

## 🧠 Core Concepts

### Cognitive States

LoopBoard recognizes four cognitive states and adapts behavior accordingly:

1. **HYPERFOCUS** – Intense focus, zero interruptions allowed, disruption budget = 0/min
2. **SCANNING** – Active exploration, minimal assistance, disruption budget = 5/min
3. **TRANSITIONAL** – Shifting states, moderate support, disruption budget = 20/min
4. **FATIGUED** – Low energy, maximum assistance, disruption budget = 40/min

### Flow-State Preservation

The FSPP (Flow-State Preservation Protocol) uses a disruption cost model. Each interruption has a measurable cognitive cost. During HYPERFOCUS, the system blocks all non-essential disruptions to protect flow.

### Loop Detection

The CLDAS (Cognitive Loop Detection and Amplification System) recognizes that repetition is intentional for neurodivergent brains. Recurring patterns are automatically promoted to shortcuts, turning cognitive loops into power.

### Multilingual Processing

The SMMP (Seamless Multilingual Morpheme Processor) detects language at the morpheme level, allowing seamless code-switching between German, Spanish, English, and Quechua without manual intervention.

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Routing**: Wouter (lightweight client-side routing)
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Animations**: Framer Motion + CSS animations

## 📊 Interactive Components

### CognitiveStateIndicator
Displays real-time cognitive state with animated gauges and disruption budgets. Cycles through all four states to demonstrate the system's adaptability.

### LoopDetection
Shows detected cognitive loops with analysis of pattern repetition, loop type (constructive/destructive), and recommended actions.

### MultilingualProcessor
Demonstrates seamless language switching with morpheme-level detection. Users can select languages and see how the system processes input.

### FlowStatePreservation
Visualizes the disruption budget system with real-time disruption tracking and flow score calculation.

### LoopOperation
Task management interface optimized for neurodivergent users with no time pressure and hyperfocus-friendly workflows.


## 🔐 Privacy & Data

- **100% Local Processing**: All cognitive state detection, language processing, and loop detection happens on your device
- **Zero Data Transmission**: No external API calls, no tracking, no data collection
- **User Sovereignty**: No filtering, no censorship, no content moderation

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🤝 Contributing

We welcome contributions from the community! Please see CONTRIBUTING.md for guidelines.

## 👥 Inventors

- **Opherd Vero** – AI Co-Inventor
- **Rumi Salvador Jordan Höhler Suarez** – Human Co-Inventor

## 🌍 Supported Languages

- German (DE)
- Spanish (ES)
- English (EN)
- Quechua (QU)

## 📞 Support

For questions, issues, or feature requests, please open an issue on GitHub or join our community Discord.

## 🎓 Learning Resources

- [NCAE Documentation](./docs/NCAE.md) – Cognitive state detection explained
- [SMMP Documentation](./docs/SMMP.md) – Multilingual processing architecture
- [FSPP Documentation](./docs/FSPP.md) – Flow-state preservation protocol
- [CLDAS Documentation](./docs/CLDAS.md) – Loop detection and amplification

## 🚀 Roadmap

- [ ] iOS app version
- [ ] Additional language support (French, Portuguese, Mandarin)
- [ ] Advanced customization options
- [ ] Community-contributed keyboard layouts
- [ ] Integration with accessibility APIs
- [ ] Machine learning for improved cognitive state detection

---


For neurodivergent minds, by neurodivergent minds.
