# DigiCorner — Design System

## Brand Colors

| Name | Hex | OKLch Variable | Use |
|---|---|---|---|
| Deep Navy | `#0B1221` | `--color-background` | Primary background |
| Rose Gold Copper | `#C4896A` | `--color-copper` | Accents, highlights, micro-details |
| Soft Off-White | `#F6F1EA` | `--color-cream` | Primary text, light surfaces |
| Ink | `#0D1525` | `--color-ink` | Secondary dark surface |
| Muted | `rgba(246,241,234,0.45)` | `--color-muted` | Subdued text, metadata |
| Border | `rgba(196,137,106,0.15)` | `--color-border` | Subtle dividers, card edges |

**Rule:** Every section background is a variation of Deep Navy. No white backgrounds. No light mode. No off-brand accent colors.

## Typography

| Role | Font | Weight | Use |
|---|---|---|---|
| Display / Headline | Fraunces | 300–500 | All hero headlines, section titles |
| Body / UI | Inter | 300–500 | Body copy, labels, navigation, metadata |
| Mono | JetBrains Mono | 400 | Code, coordinates, technical details |

**Sizing logic (mobile-first, scale up):**
- Display: `clamp(2.5rem, 8vw, 7rem)` — never smaller than impactful
- Section title: `clamp(1.75rem, 4vw, 3.5rem)`
- Body: `1rem` (16px) — never smaller than 14px
- Label / small cap: `0.75rem`, letter-spacing `0.12em`, uppercase

**Rule:** Fraunces is editorial, not decorative. Use it for conviction statements only. Never use it for body copy or UI labels.

## Layout

- Max content width: `1400px`, centered
- Standard section padding: `py-32 md:py-40` (128px / 160px vertical)
- Grid: 12-column, 24px gutter on desktop
- Spacing unit: multiples of 4px (Tailwind default)
- All sections are full-width background, content constrained inside

**Rule:** Sections breathe. Never collapse vertical space to fit more content. Spaciousness is a premium signal.

## Surfaces & Depth

- Primary surface: `#0B1221`
- Card surface: `#0D1525` (slightly lighter ink)
- No glassmorphism unless explicitly approved
- No gradient mesh backgrounds
- No white cards on dark background — use dark cards with copper borders at 15% opacity
- Film grain overlay is correct and must stay — it adds tactile depth

## Micro-Details (Copper)

Copper is the warmth in a cold palette. Use it sparingly:
- One word in a headline
- Underline on hover for links
- Step numbers in the process section
- Border-top on cards (1px, 15% opacity)
- Active navigation indicator
- Icon strokes where icons are used

**Rule:** Maximum one copper accent per viewport. If two things are copper at once, remove one.

## Animation Principles

### Philosophy
Motion supports hierarchy. It does not decorate.
Every animation must answer: what does this reveal, or what does this direct?

### Easing Standard
Use `[0.16, 1, 0.3, 1]` (ease-out-expo) for all entrances.
Use `[0.7, 0, 0.84, 0]` (ease-in-expo) for all exits.
Never use `spring` for layout-shifting animations — only for subtle physical responses (e.g. hover scale).

### Duration Standard
| Type | Duration |
|---|---|
| Micro (hover, active state) | 150–200ms |
| Element entrance | 600–900ms |
| Section transition | 900–1200ms |
| Scrub (tied to scroll) | No duration — scroll-driven |

**Rule:** If an animation takes longer than 1.2s, it must be scroll-driven, not timed.

### Entrance Pattern
Default reveal: `opacity: 0 → 1` + `y: 24px → 0`.
Clip reveal (text lines, cards): `clipPath: inset(0 100% 0 0) → inset(0 0% 0 0)`.
Stagger between siblings: `0.1s` for tight groups, `0.2s` for section-level items.

**Rule:** Never stagger more than 6 items. After 6, the last item waits too long and reads as broken.

### Scroll Triggers
Use Framer Motion `useInView` with `once: true` and `margin: "-10% 0px"`.
Only trigger when 10% of the element is inside the viewport — not on enter.

### What Is Forbidden
- Bouncy spring physics on any entrance animation
- Infinite floating/bobbing elements
- More than two animated elements entering simultaneously in the same zone
- Parallax on text (parallax on backgrounds only)
- Auto-playing carousels

## Components — Quality Standards

### Buttons (AnimatedButton.tsx)
- Primary: Copper background, Navy text, no border-radius or max 2px
- Ghost: Transparent, cream border, cream text
- Hover: Subtle scale `1.02`, background lightens slightly
- Never: rounded-full, gradient fill, shadow glow

### Cards (Works, Process)
- Dark ink surface `#0D1525`
- 1px copper border at 15% opacity on top edge only
- No box-shadow
- Hover: very slight scale `1.015`, top border goes to 40% opacity
- Image inside card: object-cover, no border-radius

### Navigation
- Fixed, transparent until scroll > 60px, then subtle backdrop-blur + navy/90 background
- Links: Inter 300, small caps, letter-spaced
- Active: copper underline, 1px

### Divider Ribbons (Marquee)
- Speed: 40–55s (never faster — speed reads as cheap)
- Separator glyphs: `◆` in copper, `·` in muted
- Text: uppercase, small caps, Inter 300

## Section-Specific Rules

| Section | Key rule |
|---|---|
| Hero | One headline. One subline. Two CTAs max. No hero image carousel. |
| Manifesto | Copy-first section. Large Fraunces italic. Lines reveal one by one. |
| Works | 4 items max visible. Images must be high-quality. No stock photos. |
| Process | Numbered 01–04. No icons. Numbers in copper Fraunces. |
| About / Stats | Numbers in large Fraunces. Labels in small-cap Inter. No pie charts. |
| Finale | One ask. One email. One booking link. No form fields on the page. |

## What Is Not Allowed

- Neon colors of any kind
- Random glassmorphism (backdrop-blur without editorial intent)
- Noisy gradient backgrounds (mesh gradients, aurora, animated gradient blobs)
- Fake 3D (CSS perspective tricks, card flips) — unless explicitly approved
- Emoji in any UI element
- Stock photo people / stock photo offices
- Generic icon libraries (Heroicons, FontAwesome) unless styled precisely
- Animated counters that spin fast (use a slow, dignified count-up)
- Loading spinners — use skeleton states or nothing
