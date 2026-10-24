# Portfolio 2.0

My personal portfolio. It's a clean, Apple-inspired single page with a soft glowing hero and gentle, scroll-driven motion.

## Highlights

- **Glow hero:** a Siri-style light orb drawn by a small custom WebGL shader. It morphs, drifts toward the cursor and fades as you scroll. It pauses off-screen and falls back to a CSS gradient when WebGL isn't available.
- **Scroll storytelling:** an Apple-style word-by-word text reveal, counting stats, and project cards that stack as you scroll.
- **Small touches:** smooth scrolling (Lenis), a magnetic contact button, spotlight and tilt cards, a scrolling tech strip, and one-click copy for my email.
- **Accessible:** respects `prefers-reduced-motion`, uses semantic landmarks and has visible keyboard focus.

## Stack

React 18 · Vite · Framer Motion · WebGL · Lenis · react-icons

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in build/
npm run preview  # serve the production build
```

## Editing content

All the text lives in [`src/data.js`](src/data.js): links, the about blurb, stats, experience, education and projects. Section components are in [`src/components/`](src/components/), and styles and design tokens are in [`src/styles.css`](src/styles.css).

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages). Use `npm run build` as the build command and `build` as the output directory.

## License

MIT. See [LICENSE](LICENSE).
