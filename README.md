# Mahir Jeet — Software Engineer Portfolio

A cinematic, code-inspired portfolio site for Mahir Jeet built with Next.js 14 (App Router). The experience blends an animated intro, immersive WebGL hero scene, code-editor UI panels, and richly themed sections to showcase engineering work and personality.

## ✨ Highlights

- **Immersive landing** with a custom Three.js orb, animated typography, and smooth intro overlay
- **Code editor-inspired panels** for storytelling through structured pseudo-code
- **Dynamic scrolling navigation** with active section tracking and framer-motion transitions
- **Responsive design** optimized for dark, neon-tinged aesthetics across devices
- **Modular content** sourced from TypeScript data files for quick customization

## 🧱 Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/) for choreography
- [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [@react-three/drei](https://github.com/pmndrs/drei) helpers
- [lucide-react](https://lucide.dev/) iconography
- [clsx](https://github.com/lukeed/clsx) for tidy class composition

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to explore the site. The intro animation plays once per session; reload with an empty sessionStorage to replay.

3. **Production build:**

   ```bash
   npm run build
   npm start
   ```

## 🗂️ Project Structure

```
app/
  layout.tsx        # Fonts, providers, global shell
  page.tsx          # Home page stitching all sections
components/
  providers/        # Global providers (transitions)
  sections/         # Hero, About, Experience, Projects, Contact
  shared/           # Header, footer, intro screen, code panel, etc.
  three/            # TechOrbit 3D scene
lib/
  content.ts        # Centralized placeholder data for the site
public/images/      # Dummy portrait + project artwork
```

## 🧩 Customization Guide

- **Edit content:** tweak `lib/content.ts` to update copy, skills, experience timeline, and project metadata.
- **Assets:** replace the SVG placeholders in `public/images/` with real photography or artwork (ensure dimensions are similar for best results).
- **Branding:** adjust colors or typography in `app/globals.css`. Fonts are defined in `app/layout.tsx` using Google Fonts (`Space Grotesk` and `JetBrains Mono`).
- **Three.js scene:** modify `components/three/tech-orbit.tsx` for different geometries, lighting, or animations.

## ☁️ Deploying to Netlify

1. **Create a Netlify site:**

   - Sign in to [Netlify](https://www.netlify.com/) and click **Add new site → Import an existing project**.
   - Connect your GitHub repository containing this project.

2. **Configure build settings:**

   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables: Netlify automatically sets `NODE_VERSION`. Add any additional secrets you need here.

3. **Enable Next.js runtime:**

   - Netlify detects Next.js automatically. Ensure the `@netlify/plugin-nextjs` plugin is enabled (Netlify adds it during deploys).

4. **Deploy:**

   - Trigger the first deploy. Once complete, Netlify will provide a live URL you can customize.
   - Subsequent pushes to `main` (or your selected branch) will auto-deploy.

5. **Optional – Preview builds:**
   - Enable deploy previews to share in-progress changes with collaborators before merging.

## ✅ Roadmap Ideas

- Swap placeholder assets with production photography and case studies
- Add testimonials or speaking engagements
- Integrate a blog/notes section powered by MDX
- Hook up a contact form via Netlify Forms or Resend

---

Crafted with care for Mahir Jeet — feel free to shape it into the perfect personal launchpad.
