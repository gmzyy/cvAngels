# Arcade portfolio

The Pages Router renders `ArcadeShell` for `/` and `/conoce-de-mi`.
Content lives in `src/content/arcade.ts`; motion presets and GSAP registration
live in `src/lib/arcade/motion.ts`; design tokens live in `src/styles/arcade.css`.
The previous editorial implementation is retained, but is no longer mounted.

## Navigation and preferences

- Hash routes: `#menu`, `#perfil`, `#stack`, `#experiencia`, `#proyectos`,
  `#educacion`, `#contacto`. Existing English section hashes remain aliases.
- Menu supports Tab, arrows, Home, End, and Enter. Escape returns to the menu.
- Intro is skippable and remembered for the current browser session.
- CRT and reduced-motion preferences are local. Sound always starts muted.
- OS reduced motion takes precedence. The experience map becomes vertical.
- Horizontal pinned experience is reserved for windows at least 1000 × 900.
- Konami code toggles the alternate palette; settings expose the same action.
- Internal projects intentionally have no public live-demo link.

## Manual verification when the owner starts the server

1. Start/skip intro; navigate all six levels using keyboard and touch.
2. Test Back/Forward, direct hash links, and `/conoce-de-mi`.
3. Filter projects in both languages; expand and close each project.
4. Check focus restoration, CV download, and contact links.
5. Toggle motion, texture, and sound; test OS reduced-motion preference.
6. Check mobile (390px), desktop, and a short desktop window. In the tall
   desktop map, confirm every mission and its bullets are readable.
7. Inspect browser console, screenshots, and performance before publishing.

No preview server was started during implementation. Static TypeScript and
content/asset checks were run; browser interaction and frame-rate testing remain.
