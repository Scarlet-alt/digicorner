# DigiCorner — Claude Working Rules

## Project

Single-page Laravel + React + Inertia + Tailwind v4 + Framer Motion v12 homepage.
One route: `GET /` → `Home.tsx`.
21 components in `resources/js/Components/`.

Read `PRODUCT.md` and `DESIGN.md` before editing any component.

## Stack — Do Not Change Without Approval

| Tool | Status |
|---|---|
| Laravel 12 | Keep |
| React 19 + Inertia 3 | Keep |
| Tailwind CSS v4 | Keep |
| Framer Motion 12 | Keep — primary animation library |
| TypeScript | Keep |
| GSAP | Not installed. Only install if horizontal pin scroll is approved. |
| Lenis | Not installed. Do not install without approval. |
| Nano Banana | Only for image generation tasks — not UI/component work. |

## Workflow Rules

1. **Inspect before editing.** Read the target file before touching it.
2. **Plan before coding.** If an edit affects more than one file, state the plan first.
3. **One section at a time.** Do not edit multiple components in one pass unless explicitly asked.
4. **Run after changes.** After any component edit, note that `npm run build` should be run to verify no TypeScript/Vite errors.
5. **Never commit.** Do not run `git commit` unless the user explicitly asks.
6. **Never touch unrelated files.** If editing `HeroScene.tsx`, do not touch `Works.tsx` or `app.css` unless the fix requires it and you say so.
7. **Never install packages** without explicit approval.
8. **Never add placeholder copy.** If copy is needed, ask the user. Do not write "Lorem ipsum" or generic filler.

## File Map

```
resources/js/Pages/Home.tsx              ← Page root, section order
resources/js/Components/
  ├── HeroScene.tsx                      ← Section 1: Hero
  ├── MarqueeRibbon.tsx                  ← Ribbon after Hero
  ├── Manifesto.tsx                      ← Section 2: What we build / Why
  ├── LogoMarquee.tsx                    ← Logo scroll
  ├── ScrollScrubTitle.tsx               ← Pinned scroll zoom text
  ├── InterludeRibbon.tsx                ← Divider ribbon
  ├── HorizontalReel.tsx                 ← Section 4: Process
  ├── ProcessRibbon.tsx                  ← Divider ribbon
  ├── Works.tsx                          ← Section 3: Selected Work
  ├── About.tsx                          ← Section 5: Stats / About
  ├── AboutRibbon.tsx                    ← Divider ribbon
  ├── Finale.tsx                         ← Section 6: Final CTA
  ├── IntroVideoOverlay.tsx              ← Intro video (session-persisted)
  ├── AnimatedButton.tsx                 ← Shared button component
  ├── PremiumMarquee.tsx                 ← Shared marquee primitive
  ├── MenuOverlay.tsx                    ← Mobile nav overlay
  ├── PageTransition.tsx                 ← Page fade-in wrapper
  ├── StarField.tsx                      ← Procedural star field (used in ScrollScrub)
  ├── WorkRibbon.tsx                     ← Divider after Works
  └── CinematicBridge.tsx               ← Currently unused
resources/css/app.css                    ← Global styles, Tailwind v4 theme, keyframes
resources/js/app.tsx                     ← Inertia app root, PageTransition
```

## Animation Rules — Enforced

Always reference `DESIGN.md` for easing, duration, and stagger values.

**Standard entrance:**
```tsx
initial={{ opacity: 0, y: 24 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

**Scroll-triggered entrance (useInView):**
```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
```

**Clip reveal (text lines):**
```tsx
initial={{ clipPath: "inset(0 100% 0 0)" }}
animate={{ clipPath: "inset(0 0% 0 0)" }}
transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
```

**Stagger (whileInView on parent):**
```tsx
variants={{
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}}
```

**Never use:**
- `type: "spring"` for layout-level animations
- `bounce`, `stiffness`, `damping` on entrance animations
- `animate` on elements that should be scroll-triggered — use `whileInView` or `useInView`
- Stagger on more than 6 siblings

## CSS / Tailwind Rules

- All colors via CSS variables: `text-[var(--color-cream)]`, `bg-[var(--color-background)]`
- Never hardcode hex values in JSX — always use the variable
- Spacing: Tailwind scale only — no arbitrary pixel values except for very specific overrides
- Film grain overlay class is `grain` — do not remove it from `<main>`
- Typography: `font-display` for Fraunces, `font-sans` for Inter, `font-mono` for JetBrains

## Copper Accent Rule

Maximum one copper element visible in the same viewport zone at a time.
In practice: use copper for one word in a headline OR a step number OR a border — not all three simultaneously.

## What Claude Must Not Do

- Generate placeholder copy ("Lorem ipsum", "Coming soon", "Insert text here")
- Add comments explaining what code does — the code should be self-evident
- Add multi-line JSDoc or block comments
- Introduce new dependencies without approval
- Redesign a section that was not asked about
- Touch `routes/web.php`, `app/Http/`, or any Laravel backend files unless debugging a server error
- Add error boundaries, fallback UI, or "just in case" defensive code that isn't needed
- Use `console.log` in committed code
- Add `TODO` comments

## Build Check

After every component edit:
```
npm run build
```
If TypeScript errors appear, fix them before reporting the task done.
