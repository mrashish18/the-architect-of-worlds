<div align="center">

# 🌌 The Architect of Worlds
### A Cinematic Interactive 3D Universe Experience

*Every world begins with an idea. Explore handcrafted planets inside a living cosmic workshop.*

[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-white?style=for-the-badge&logo=three.js&logoColor=black)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/Nova_AI-Powered-412991?style=for-the-badge&logo=openai)](https://openai.com/)
[![Hackathon](https://img.shields.io/badge/Built_For-3D_Websites_Hackathon-FF00AA?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile_Ready-orange?style=for-the-badge)]()

![Hero Overview](project_media/The%20Architect%20Universe%20Overview.png)

</div>

---

## 🏆 Hackathon Submission

**Event:** 3D Websites Hackathon  
**Theme:** Creative & Immersive 3D Web Experiences  
**Project:** The Architect of Worlds

## ✨ Highlights

- 🌌 **Cinematic 3D universe** rendered at 60 FPS in the browser.
- 🪐 **Interactive handcrafted worlds** built with custom GLSL shaders.
- 🤖 **AI-powered Nova assistant** streaming real-time contextual knowledge.
- 🎮 **Story-driven exploration** bridging web development with game design.
- ⚡ **Built with Next.js + React Three Fiber** for modern, scalable architecture.

---

## 📸 Screenshot Gallery

### The Universe
![The Architect Universe](project_media/The%20Architect%20Universe.png)
![The Nexus](project_media/The%20Nexus.png)

### The Handcrafted Worlds
![Forge Planet](project_media/Forge%20Planet%20(Where%20Ideas%20Are%20Forged).png)
![Ocean World](project_media/Ocean%20World.png)
![Crystal Moon](project_media/Crystal%20Moon%20(Facets%20of%20Experience).png)
![Singularity](project_media/Singularity%20(The%20Event%20Horizon).png)
![Terra Earth](project_media/Terra%20Earth%20(The%20Living%20World).png)

### The Galactic Garden (Portfolio)
![Galactic Garden](project_media/Galactic%20Garden.png)
![Galactic Garden Full View](project_media/Galactic%20Garden%20Full%20View.png)
![Void Willow Sprout](project_media/Void%20Willow%20Sprout.png)
![Nebula Orb Tendril](project_media/Nebula%20Orb%20Tendril.png)

### Nova AI & Interfaces
![Universal Guide Nova](project_media/Universal%20Guide(Nova).png)
![Architect Story](project_media/Architect%20Story.png)
![3D & AI Project](project_media/3D%20&%20AI%20Project.png)
![Technical Toolkit](project_media/Technical%20Toolkit.png)
![Transmission](project_media/Transmission.png)

---

## 📖 About

**What is The Architect of Worlds?**  
The Architect of Worlds is an ambitious, cinematic 3D WebGL universe that pushes the boundaries of traditional web navigation. It transforms a standard portfolio into an emotional, interactive journey through a procedurally generated cosmos.

**Why was it built?**  
To prove that web browsers are capable of delivering console-quality, story-driven 3D experiences without the need for massive downloads, pre-rendered videos, or heavy plugins.

**What inspired it?**  
Inspired by deep-space exploration, ambient gaming menus, and sci-fi world-building. The creative direction treats the visitor like an astronaut arriving in a new solar system.

**What experience does it create?**  
Users are invited to pan, zoom, and fly through a galaxy, discovering planets, unlocking lore, interacting with environmental mechanics, and conversing with an integrated AI orbital guide.

---

## 🚀 Features

✓ **Cinematic Intro** - Auto-dismissing loading sequences that gracefully transition into the 3D scene.  
✓ **Interactive Universe** - Free-camera navigation, zoom, and panning using Drei OrbitControls.  
✓ **Handcrafted Worlds** - 6 unique celestial bodies (Nexus, Terra Earth, Forge, Ocean, Crystal Moon, Singularity).  
✓ **Dynamic Camera** - GSAP-powered cinematic camera transitions locking smoothly onto celestial targets.  
✓ **Particle Effects** - Thousands of instanced cosmic dust motes scattered across the volume.  
✓ **Custom Shaders** - Highly optimized GLSL fragment/vertex shaders for lava, nebulas, and planetary atmospheres.  
✓ **Nova AI** - OpenAI-powered streaming assistant that reacts to your current orbital sector.  
✓ **Planet Exploration** - Deep Exploration HUD panels detailing NASA-inspired astrophysics and lore.  
✓ **Responsive UI** - A sleek, dark-themed glassmorphism HUD built with Tailwind CSS.  
✓ **Procedural Audio** - Ambient synthesizer drone and acoustic feedback powered by Web Audio API.  

---

## 🛠️ Tech Stack

| Domain | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Core routing, Server-side API endpoints |
| **Language** | TypeScript 5 | Strict type-safety across components and state |
| **Rendering** | React Three Fiber | Declarative WebGL 3D scene graph |
| **Post-Processing** | Postprocessing / Drei | 0x MSAA Bloom, Vignette, Chromatic Aberration |
| **Animation** | GSAP / Framer Motion | High-performance camera tweening and UI spring physics |
| **Styling** | Tailwind CSS 4 | Atomic CSS classes and glassmorphism styling |
| **State** | Zustand | Lightweight global state for UI toggles and camera targets |
| **AI** | Vercel AI SDK / OpenAI | Streaming completions for the Nova AI assistant |
| **Package Manager**| npm | Dependency resolution and scripts |

---

## 📁 Folder Structure

```text
src
├── app
│   ├── api/chat/route.ts
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components
│   ├── audio/
│   ├── camera/
│   ├── canvas/
│   ├── celestial/
│   ├── effects/
│   ├── environment/
│   ├── garden/
│   ├── interactive/
│   ├── shaders/
│   └── ui/
├── config
│   ├── camera.ts
│   └── worlds.ts
├── data
│   ├── gardenData.ts
│   └── universe.json
├── hooks
│   ├── useDeviceCapability.ts
│   ├── useReducedMotion.ts
│   └── useWorldNavigation.ts
├── lib
│   ├── openai.ts
│   ├── prompts.ts
│   └── procedural/
├── shaders
│   └── (custom .ts GLSL string files)
├── stores
│   ├── useAudioStore.ts
│   ├── useGardenStore.ts
│   └── useWorldStore.ts
├── systems/
├── types/
└── utils/
```

---

## 🏛️ Architecture

* **App Router (`src/app`)**: Provides the root layout, loads standard fonts (Inter & JetBrains Mono), and mounts the Vercel AI SDK endpoint (`api/chat/route.ts`).
* **Scene Graph (`src/components/canvas/SceneContent.tsx`)**: The root of the declarative Three.js tree. It mounts planets, lighting, post-processing, and the GSAP Cinematic Camera.
* **React Components (`src/components/ui`)**: Traditional React DOM nodes layered *over* the canvas using `pointer-events-none` containers and framer-motion animations.
* **State Management (`zustand`)**: Decoupled state (`useWorldStore.ts`) ensuring that updates to the UI (like selecting a planet) can drive the 3D camera without causing heavy re-renders of the WebGL canvas.
* **Three.js / Shaders (`src/shaders`)**: Pure WebGL logic abstracted into reusable React Three Fiber materials.
* **Nova API (`src/api/chat`)**: Utilizes Vercel's Edge-compatible AI SDK to securely stream context-aware OpenAI completions to the client.

---

## 🛤️ Project Walkthrough

1. **Landing**
   The application boots instantly into the WebGL canvas. An initial loading screen fades out as shaders compile and the audio context unlocks.
   
2. **Universe Overview**
   The camera pulls back to reveal a sprawling starfield, procedurally generated cosmic dust, and a central glowing Nexus. Users are free to drag and rotate the cosmos.

3. **World Selection**
   Using the **Grand World Navigator** top bar, the user clicks on a planet. The GSAP-controlled camera swoops across the solar system, framing the celestial body.

4. **Interaction & Deep Exploration**
   A sleek telemetry panel opens. Users can review the lore, compare metrics, and trigger interactions (e.g., Anvil Strike, Crystal Refraction).

5. **Nova AI**
   Clicking the Nova icon opens a conversational terminal. Nova knows exactly which planet the user is orbiting and tailors her astrophysics and lore answers to the current environment.

6. **Portfolio / Galactic Garden**
   Entering the 'Garden Mode' transitions the scene from macro-planets to a stylized, micro-ecosystem detailing the creator's portfolio, achievements, and technical toolkits.

---

## 📊 Feature Status

| Feature | Status |
| :--- | :--- |
| **Interactive Universe** | Completed |
| **Custom Planet Shaders** | Completed |
| **GSAP Camera System** | Completed |
| **Nova AI Assistant** | Completed |
| **Deep Exploration UI** | Completed |
| **Procedural Audio** | Completed |
| **World Interactions** | In Progress |
| **Galactic Garden Mode** | In Progress |
| **Multiplayer Tracking** | Planned |
| **VR WebXR Support** | Planned |

---

## ⚡ Performance

Rendering a complex multi-planet universe in the browser requires strict optimization. The following systems are actively implemented:

* **Lazy Loading**: Heavy React UI overlays are dynamically imported only when required.
* **Instancing**: Cosmic dust and starfields use `THREE.InstancedMesh` to render thousands of particles in a single draw call.
* **Geometry Tuning**: Sphere geometries are heavily minimized (64x64 segments instead of 256x256), relying on normal maps and shaders for detail.
* **Lighting Optimization**: Removed expensive `castShadow` passes; relying entirely on material emissives and point lights.
* **Dynamic LOD**: Post-processing effects are disabled on low-tier devices via the `useDeviceCapability` hook.

---

## 🗺️ Roadmap

**✅ Completed**
- Next.js 15 & React Three Fiber Base Integration
- Procedural Universe Generation
- 6 Custom Hand-Coded GLSL Worlds
- Cinematic GSAP Camera Navigation
- Nova AI Streaming Integration
- Deep Exploration NASA Telemetry UI

**🔄 In Progress**
- Polishing World-Specific WOW Interactions
- Tuning Procedural Audio Synthesis Engine
- Mobile Touch-Controls Polish

**🔮 Future**
- VR WebXR Support
- Multiplayer Orbital Tracking
- Expandable Cosmic Sectors (JSON driven universe generation)

---

## 💻 Local Development

**1. Install Dependencies**
```bash
npm install
```
*Installs all necessary packages including Next.js, Three.js, React Three Fiber, and Tailwind CSS.*

**2. Start Development Server**
```bash
npm run dev
```
*Spins up the Next.js development server on `http://localhost:3000` utilizing the Turbopack compiler for fast HMR.*

**3. Build for Production**
```bash
npm run build
```
*Creates an optimized, production-ready build. Compiles shaders, minifies JavaScript, and generates static pages.*

**4. Start Production Server**
```bash
npm start
```
*Runs the compiled production build locally for performance testing.*

---

## 🔐 Environment Variables

The project requires specific environment variables for the Nova AI to function. A `.env.example` file is provided in the repository. 

Create a `.env.local` file and add the following:

```env
# Required for the Nova AI Assistant
OPENAI_API_KEY=your_openai_or_openrouter_api_key_here

# Optional: Override the base URL if using a service like OpenRouter
OPENAI_BASE_URL=https://openrouter.ai/api/v1
```

---

## 🤝 Contributing

We welcome contributions from graphics programmers, UI engineers, and storytellers!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure you run `npm run lint` and `npm run build` before opening a PR.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🖋️ Author

**The Architect**
- **GitHub**: [Profile Link Placeholder]()
- **LinkedIn**: [Profile Link Placeholder]()
- **Portfolio**: [Portfolio Link Placeholder]()

*Built with passion, code, and starlight.*
