

## Plan: Modernize MORS Design

The current site is functional but visually flat — white backgrounds, basic borders, minimal visual hierarchy. This plan brings it to a 2026 design standard with subtle depth, refined typography, smooth interactions, and a cohesive visual system, while preserving the minimalist identity.

### Design Direction

Clean, editorial modernism — think Linear, Stripe, or Arc browser. Monochrome base with one accent color (subtle blue-indigo), generous whitespace, refined micro-interactions, and layered depth through gradients and blur.

### Changes

**1. Global Design System (index.css + tailwind.config.js)**
- Add CSS custom properties for a refined neutral palette with subtle warm tones
- Introduce a soft noise/grain texture overlay for depth
- Add smooth page transition animations
- Update body font to Inter (clean, modern sans-serif) via Google Fonts
- Add subtle dot-grid or radial gradient background pattern
- Refine the glassmorphism to be more sophisticated (less blur, more subtlety)

**2. Homepage (Index.jsx)**
- Add a large-scale animated gradient orb behind the hero (subtle, slow-moving)
- Upgrade typography: use a modern serif like Playfair Display for "mors" instead of Times New Roman
- Add a subtle scroll-triggered fade for the poster image
- Modernize buttons with hover micro-animations (scale + shadow shift)
- Add a thin animated line or divider between hero and poster sections

**3. Navigation (anime-navbar.tsx)**
- Refine the glass effect — lighter blur, thinner border, subtler shadow
- Remove the anime mascot character (it clashes with a modern professional aesthetic) and replace with a minimal active indicator (thin underline or dot)
- Smoother hover states with opacity transitions
- Slightly smaller, more refined pill shape

**4. Learn More Page (HeroSection, StatisticsSection, CallToAction)**
- Statistics: replace the blue-tinted cards with clean white cards with subtle left-border accent colors and larger, bolder numbers
- Add scroll-triggered entrance animations using framer-motion viewport detection
- Hero section: add a subtle gradient text effect on the heading
- Clean up card styling — consistent rounded corners, subtle shadows instead of borders

**5. Get Involved Page**
- Upgrade ActionCards with hover lift effects, subtle gradient backgrounds
- Add icon accents to each card
- Modernize button styles to match new design system

**6. Footer**
- Cleaner grid layout with better spacing
- Remove the blue glow-dance animation (dated)
- Add a subtle top gradient fade instead of hard border
- Refined typography hierarchy

**7. Newsroom / Press Office**
- Clean up the tabs styling to be more minimal
- Statement cards: add subtle left-border accent, cleaner hover states
- Modernize the contact press office section

**8. Communications + Manifesto Pages**
- Apply consistent card styling from the new design system
- Manifesto title: upgrade font treatment, add subtle entrance animation refinement
- Clean up accordion styling for a more polished look

### Technical Details

- Add `@fontsource/inter` and `@fontsource/playfair-display` for typography
- All animations use `framer-motion` (already installed) with `whileInView` for scroll triggers
- New CSS utilities added to `index.css` for reusable modern patterns (e.g. `.modern-card`, `.gradient-text`, `.accent-border`)
- No structural/routing changes — purely visual updates
- Mobile-first approach maintained throughout

### Files Modified
- `index.html` — add Inter + Playfair Display fonts
- `src/index.css` — new design tokens, utilities, backgrounds
- `tailwind.config.js` — updated font families, new animation keyframes
- `src/pages/Index.jsx` — hero redesign
- `src/components/ui/anime-navbar.tsx` — refined navigation
- `src/components/Header.jsx` — minor class updates
- `src/components/Footer.jsx` — modern footer
- `src/components/learn-more/HeroSection.jsx` — gradient text, spacing
- `src/components/learn-more/StatisticsSection.jsx` — modern stat cards
- `src/components/learn-more/CallToAction.jsx` — refined CTA
- `src/components/get-involved/ActionCard.jsx` — hover effects
- `src/pages/GetInvolved.jsx` — layout refinements
- `src/pages/Newsroom.jsx` — cleaner press office
- `src/pages/Communications.jsx` — consistent card styling
- `src/components/manifesto/ManifestoTitle.jsx` — typography upgrade

