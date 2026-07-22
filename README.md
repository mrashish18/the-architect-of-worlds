<div align="center">

# 🌌 The Architect of Worlds
### A Cinematic Interactive 3D Universe Built with Next.js & Three.js

*Experience a universe where logic, nature, and engineering converge into breathtaking interactive 3D web art.*

[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-white?style=for-the-badge&logo=three.js&logoColor=black)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/Nova_AI-Powered-412991?style=for-the-badge&logo=openai)](https://openai.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Hackathon](https://img.shields.io/badge/Built_For-3D_Websites_Hackathon-FF00AA?style=for-the-badge)]()

</div>

---

## 📸 Project Preview

**The Architect Universe Overview**
![Hero Overview](project_media/Screenshot%202026-07-22%20223916.png)

**Terra Earth (The Living World)**
![Terra Earth](project_media/Screenshot%202026-07-22%20223939.png)

**Forge Planet (Where Ideas Are Forged)**
![Forge Planet](project_media/Screenshot%202026-07-22%20223956.png)

**Crystal Moon (Facets of Experience)**
![Crystal Moon](project_media/Screenshot%202026-07-22%20224014.png)

**Singularity (The Event Horizon)**
![Singularity](project_media/Screenshot%202026-07-22%20224034.png)

---

## 📖 About

**What is The Architect of Worlds?**
The Architect of Worlds is an ambitious, cinematic 3D WebGL universe crafted for the 3D Websites Hackathon. It replaces the traditional concept of static portfolios and standard web navigation with an unforgettable emotional interactive journey. 

**What Inspired It?**
Inspired by deep space exploration, interactive museum exhibits, and high-end video game menus, this project demonstrates that 3D websites can transcend simple 3D model viewers. It's about storytelling, curiosity, and immersion.

**Why It Exists?**
To push the boundaries of what is possible in the browser. By combining Next.js App Router, React Three Fiber, Custom GLSL Shaders, and Web Audio API, the project achieves console-quality visuals and audio running entirely in a web browser.

**What Makes It Different?**
Every planet, nebula, and interactive element is generated procedurally with custom shaders. There are no pre-rendered videos or heavy baked models holding the experience back. It features a fully integrated conversational AI (Nova) that acts as an orbital guide, directly tied to the lore and state of the 3D world.

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **✨ Cinematic Intro** | Breathtaking camera sweeps and procedurally generated loading sequences. |
| **🌌 Interactive Universe** | Full 3D environment with free-camera navigation, zoom, and panning. |
| **🪐 Handcrafted Worlds** | 6 unique celestial bodies: The Nexus, Terra Earth, Forge Planet, Ocean World, Crystal Moon, and Singularity. |
| **🎥 Smooth Camera Animation** | GSAP-powered cinematic camera transitions that smoothly lock onto celestial targets. |
| **🎨 Custom Shaders** | Complex GLSL fragment and vertex shaders for atmospheres, lava, crystals, and nebulas. |
| **🌠 Dynamic Particles** | Thousands of instanced cosmic dust motes and volumetric starlight rays. |
| **🤖 Nova AI Assistant** | OpenAI-powered streaming AI companion that knows the lore and science of every planet. |
| **⚡ Performance Optimized** | Dynamic LOD, multisampling tuning, and lazy-loaded WebGL components for 60fps rendering. |
| **🌙 Dark Theme** | Immersive deep space aesthetic with glowing UI elements and glassmorphism. |
| **🎧 Procedural Audio** | Real-time synthesized ambient drone and acoustic feedback using Web Audio API. |

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **Next.js 15 (App Router)** | Framework, Routing, API Endpoints |
| **React 19** | UI Architecture, State Management |
| **Three.js & React Three Fiber** | 3D WebGL Rendering Engine |
| **Drei & Postprocessing** | 3D Utilities, Bloom, Vignette, Chromatic Aberration |
| **TypeScript 5** | Type-Safe Codebase |
| **GSAP** | High-Performance Camera & UI Animations |
| **Framer Motion** | Declarative React UI Animations |
| **Tailwind CSS 4** | Styling, Glassmorphism, Layouts |
| **OpenAI AI SDK** | Nova AI Conversational Engine |
| **Zustand** | Global Application State |

---

## 📁 Folder Structure

```text
src
├── app
│   ├── api
│   │   └── chat
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── audio
│   ├── camera
│   ├── canvas
│   ├── celestial
│   ├── effects
│   ├── environment
│   ├── garden
│   ├── interactive
│   ├── shaders
│   └── ui
├── config
│   ├── camera.ts
│   └── worlds.ts
├── data
│   ├── gardenData.ts
│   └── universe.json
├── hooks
├── lib
├── shaders
├── stores
└── types
```

---

## 🚀 Installation

Ensure you have Node.js 18+ installed on your machine.

**1. Install Dependencies**
```bash
npm install
```
*Installs all necessary packages including Next.js, Three.js, React Three Fiber, and Tailwind CSS.*

**2. Start Development Server (Turbopack)**
```bash
npm run dev
```
*Spins up the Next.js development server on `http://localhost:3000` utilizing the blazing-fast Turbopack compiler.*

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

## 🛤️ Project Walkthrough

1. **Landing & Initialization**
   The application boots instantly into the WebGL canvas, displaying an auto-dismissing initialization sequence while shaders compile and audio contexts unlock.

2. **The Universe Overview**
   The camera reveals a sprawling starfield with the Nexus Core at the center. Ambient lighting, cosmic dust, and post-processing effects (Bloom, Chromatic Aberration) create a cinematic atmosphere.

3. **Planet Exploration**
   Using the **Grand World Navigator** top bar, the user selects a planet (e.g., Terra Earth, Forge Planet). The GSAP-controlled Cinematic Camera swoops across the solar system, perfectly framing the selected world.

4. **Deep Inspections & Interactions**
   Upon arriving at a planet, the **Deep Exploration Panel** opens. Here, users can view NASA-inspired astrophysical spectrometry data, read the planet's lore, compare celestial metrics, and trigger WOW interactions (e.g., Anvil Strike on Forge, Ocean Dive, Crystal Refraction).

5. **Nova AI Consultation**
   At any time, clicking "Ask Nova AI" drops down an intelligent chat terminal. Nova is context-aware—if you are orbiting Terra Earth, it will suggest questions about the biosphere and its nitrogen-oxygen atmosphere.

6. **The Galactic Garden & Portfolio**
   Switching modes transitions the user from the macro-universe to the micro-garden, unlocking the Architect Portfolio Reward—a final destination where all exploration converges into the creator's core identity.

---

## 🖼️ Screenshot Gallery

### The Worlds
![Ocean World](project_media/Screenshot%202026-07-22%20224054.png)
![The Nexus](project_media/Screenshot%202026-07-22%20224113.png)
![Secret Planet](project_media/Screenshot%202026-07-22%20224137.png)

### The Galactic Garden
![Garden Intro](project_media/Screenshot%202026-07-22%20224154.png)
![Garden View](project_media/Screenshot%202026-07-22%20224210.png)
![Flora Detail](project_media/Screenshot%202026-07-22%20224228.png)
![Garden Ecosystem](project_media/Screenshot%202026-07-22%20224241.png)

### UI & Nova AI
![Nova AI Chat](project_media/Screenshot%202026-07-22%20224329.png)
![Exploration HUD](project_media/Screenshot%202026-07-22%20224431.png)
![Telemetry 1](project_media/Screenshot%202026-07-22%20224511.png)
![Telemetry 2](project_media/Screenshot%202026-07-22%20224607.png)
![Telemetry 3](project_media/Screenshot%202026-07-22%20224624.png)
![Telemetry 4](project_media/Screenshot%202026-07-22%20224641.png)

---

## 🏛️ Architecture

* **App Router (`src/app`)**: Handles the core page layout, font injection (Inter & JetBrains Mono), and API routes for OpenAI streaming.
* **Component Hierarchy (`src/components`)**: Separated strictly into `ui` (React DOM overlays) and `canvas` / `celestial` / `environment` (React Three Fiber 3D elements).
* **Three.js Scene (`src/components/canvas/SceneContent.tsx`)**: The root of the WebGL tree, managing the space lighting, procedural universe, interactive worlds, and garden mode.
* **React State (`zustand`)**: `useWorldStore.ts` and `useGardenStore.ts` manage global discovery metrics, camera targets, and UI visibility without triggering massive re-renders.
* **Nova API (`src/api/chat`)**: Utilizes Vercel AI SDK to stream OpenAI responses directly into the conversational UI overlay.
* **Rendering Pipeline (`src/components/canvas/SceneEffects.tsx`)**: Integrates `@react-three/postprocessing` with optimized 0x MSAA Bloom and Vignette passes to guarantee high frame rates.

---

## 📊 Current Implementation Status

| Component | Progress | Status |
| :--- | :--- | :--- |
| **Universe & Environment** | ██████████ 100% | Complete |
| **Planets & Shaders** | ██████████ 100% | Complete |
| **Camera & Navigation** | ██████████ 100% | Complete |
| **Nova AI Assistant** | ██████████ 100% | Complete |
| **World Interactions** | ████████░░ 80% | Polishing |
| **Galactic Garden** | ████████░░ 80% | Polishing |
| **Performance Tuning** | █████████░ 90% | Highly Optimized |

---

## 🗺️ Roadmap

**✅ Completed**
- Base Next.js 15 & R3F Integration
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
- Multiplayer Orbital Tracking (See other visitors)
- Expandable Cosmic Sectors (JSON driven universe expansion)

---

## ⚡ Performance

Rendering a multi-planet universe in a browser requires extreme optimization:
* **Lazy Loading**: Heavy UI components and specific planetary interactions are dynamically imported.
* **GPU Rendering**: Utilizing raw GLSL shaders rather than heavy textures reduces memory footprint.
* **Geometry Tuning**: Sphere geometries are heavily optimized (64x64 segments instead of 256x256).
* **Lighting/Shadows**: Removed expensive castShadow passes in deep space; relying on material emissives and point lights.
* **Target FPS**: Strictly architected to maintain **60 FPS** on mid-tier hardware and **120 FPS** on high-end devices.

---

## 🌟 Why This Project Stands Out

Most 3D websites use 3D as a gimmick—a floating object next to text. **The Architect of Worlds** uses 3D as the *entire storytelling medium*. 
The creative direction treats the visitor like an astronaut arriving in a new solar system. The blend of modern web technologies (Next.js, Tailwind) with hardcore graphics programming (GLSL, Three.js) creates an immersive experience that commands curiosity, evokes emotion, and perfectly bridges the gap between software engineering and digital art.

---

## 🎮 Demo

> **Live Demo:** [TBA - Deploying Soon]()
> 
> **Demo Video:** [Placeholder for YouTube/Vimeo link]()

*(Note: Ensure you have hardware acceleration enabled in your browser for the best experience.)*

---

## 🤝 Contributing

We welcome contributions from graphics programmers, UI engineers, and storytellers!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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
