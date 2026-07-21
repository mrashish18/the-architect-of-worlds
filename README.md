# 🌌 The Architect of Worlds

> **"Every world tells a story. Every story is a part of me."**

Welcome to **The Architect of Worlds**, a visually stunning, immersive 3D portfolio and digital universe built for the **3D Websites Hackathon**. 

Most websites are designed to be navigated. We wanted to create one that could be *explored*. 

Instead of traditional scrolling menus or generic templates, visitors seamlessly travel through a cinematic, hyper-realistic universe entirely powered by custom WebGL GLSL shaders and React Three Fiber. Each world represents a different chapter of the experience, showcasing out-of-the-box interactive logic, intense atmospheric lighting, and high-performance generative rendering.

---

## 📖 The Story & Inspiration

Inspired by the awe-inspiring environments of movies like *Interstellar* and *Avatar*, we imagined a universe where a celestial architect creates entire worlds from stardust. The journey begins in deep space. As stars slowly appear, the camera enters a cosmic workshop where a mysterious architect is forging living worlds suspended in the void.

The goal wasn't just to build a cool landing page—it was to create a jaw-dropping moment that makes visitors stop, look around, and simply say "Wow."

---

## 🌍 The Worlds (Features)

The universe is composed of several unique, hyper-realistic planets built from the ground up using raw math (GLSL) rather than pre-rendered 3D models.

### 🌍 The Emerald Isle (About Me)
A hyper-realistic Earth-like planet built entirely from procedural 3D Simplex noise. 
- **Features:** Shifting procedural continents, deep oceans, an independent swirling cloud layer, and a beautiful volumetric atmosphere that glows using Fresnel scattering.

### 🔥 The Forge Planet (Projects)
A dark, volatile volcanic world of cracked rock and glowing lava rivers. Surrounded by a storm of volcanic ash particles.
- **Out of the box interactivity:** The planet's molten core physically reacts to your cursor. When you attempt to harvest its energy, the fluid simulation dynamically accelerates the lava flow and heat intensity in real-time.

### 🌊 Ocean of Knowledge (Skills)
A stunning deep-water planet. 
- **Features:** Instead of a flat sphere mapped with a texture, it uses an advanced GLSL vertex shader to physically displace the geometry, creating rippling waves and intense specular sun reflections across an endless blue liquid surface.

### 🔮 Crystal Moon (Experience)
An enormous, highly refractive glass Icosahedron.
- **Features:** Utilizes advanced `MeshTransmissionMaterial` to act as a real prism in space, bending light with chromatic aberration and internal reflections.

### ⚫ Singularity (Contact)
The end of the cosmic journey.
- **Features:** A dense, mesmerizing particle vortex representing an accretion disk circling an event horizon.

---

## 🛠️ Technology Stack

This project pushes the absolute limits of the modern web stack, prioritizing pure code-generated aesthetics over heavy external 3D assets:

- **Next.js 15**: App Router, Server Components, Fast Refresh.
- **React Three Fiber & Three.js**: The core 3D engine for rendering the cosmos.
- **Custom WebGL / GLSL Shaders**: Wrote raw vertex and fragment shaders for procedural terrain, fluid dynamics, and atmospheric scattering.
- **@react-three/drei**: Advanced materials (Transmission), camera controls, and seamless HTML overlays.
- **Tailwind CSS**: Ultra-minimalist glassmorphism UI that floats natively within the 3D space.
- **Framer Motion**: Smooth typography and UI animations.
- **Zustand**: Lightweight state management for tracking the active world and camera transitions.

---

## 🚀 How We Built It (The Hackathon Journey)

### The Challenge
We initially started by building planets using basic Three.js primitives (spheres, cones, tubes). However, we quickly realized that this looked like "programmer art" and lacked the cinematic, AAA-quality feel required to win a 3D aesthetics hackathon.

### The Pivot
We executed a massive art direction pivot. We threw out the cheap geometry and shifted entirely to **Shader-Driven Architecture**. 
- We implemented complex Fractal Brownian Motion (FBM) and 3D Simplex noise in GLSL to generate procedural continents and clouds.
- We used vertex displacement to create actual waves on the Ocean planet.
- We stripped the UI down to a hyper-minimalist, floating glassmorphism HUD so it wouldn't distract from the breathtaking space environments.

---

## 💻 Getting Started

Want to explore the universe locally? Follow these steps:

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-architect-of-worlds.git
   cd the-architect-of-worlds
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser. 
*(Note: For the best experience, ensure hardware acceleration is enabled in your browser settings.)*

---

## 📁 Project Structure

```text
├── src/
│   ├── app/                # Next.js App Router (layout, page)
│   ├── components/         # React Components
│   │   ├── camera/         # Cinematic Camera logic
│   │   ├── canvas/         # Scene setup and Post-processing
│   │   ├── environment/    # Background universe, stars, comets
│   │   ├── ui/             # Glassmorphism Overlays and HUDs
│   │   └── worlds/         # The individual planet components
│   ├── config/             # World data, lore, colors, positions
│   ├── shaders/            # Custom WebGL GLSL Shaders (Earth, Lava, Ocean)
│   ├── stores/             # Zustand global state (useWorldStore)
│   └── types/              # TypeScript definitions
```

---

## 🏆 Hackathon Submission Details

This project is officially submitted for the **3D Websites Hackathon**. 
- **Theme**: Free-form creativity and visually stunning web experiences.
- **Core Focus**: High-end aesthetics, cinematic lighting, and replacing flat geometry with living, breathing GLSL environments built purely from code. 

*"The goal wasn't to build another portfolio—it was to create a moment."*
