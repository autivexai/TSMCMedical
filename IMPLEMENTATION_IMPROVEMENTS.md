# IMPLEMENTATION IMPROVEMENTS: TSMC Medical Supply Frontend

This document is the execution plan for frontend-only improvements identified during a site review. It is organized by priority, includes file-level guidance, and uses checklists so progress can be tracked incrementally.

**Scope:** React + Vite + Tailwind UI/UX only. No new backend features, APIs, or database work unless noted as optional (e.g., existing Supabase contact form stays as-is).

**Related doc:** `IMPLEMENTATION_UPDATE.md` (broader vision). This plan focuses on practical, shippable improvements aligned with that vision.

---

## Progress overview

| Phase | Focus | Status |
|-------|--------|--------|
| 0 | Foundation & design tokens | ⬜ Not started |
| 1 | Global UX blockers (loading, brand, images) | ⬜ Not started |
| 2 | Homepage redesign | ⬜ Not started |
| 3 | Products page discovery | ⬜ Not started |
| 4 | Navigation, footer, News | ⬜ Not started |
| 5 | Accessibility & motion | ⬜ Not started |
| 6 | Polish, QA & launch checklist | ⬜ Not started |

Update the **Status** column as phases complete (⬜ → 🟡 In progress → ✅ Done).

---

## Table of contents

1. [Goals & success criteria](#1-goals--success-criteria)
2. [Phase 0: Foundation & design system](#2-phase-0-foundation--design-system)
3. [Phase 1: Global UX blockers](#3-phase-1-global-ux-blockers)
4. [Phase 2: Homepage redesign](#4-phase-2-homepage-redesign)
5. [Phase 3: Products page discovery](#5-phase-3-products-page-discovery)
6. [Phase 4: Navigation, footer & News](#6-phase-4-navigation-footer--news)
7. [Phase 5: Accessibility & motion](#7-phase-5-accessibility--motion)
8. [Phase 6: Polish, QA & launch](#8-phase-6-polish-qa--launch)
9. [File impact matrix](#9-file-impact-matrix)
10. [Suggested timeline](#10-suggested-timeline)
11. [Master checklist (copy for PRs)](#11-master-checklist-copy-for-prs)

---

## 1. Goals & success criteria

### Primary goals

- **Clear first impression:** Visitor understands TSMC / TwinJ3 relationship and what to do next within one screen.
- **Less friction:** Remove artificial delays; reduce duplicate carousels and repeated copy.
- **Faster discovery:** Home funnels to products; `/tsmc` supports filter/search without backend changes.
- **Trust:** Real institution names, proper logo alt text, consistent branding.
- **Cohesive UI:** Shared typography, colors, spacing, and image patterns across pages.

### Success criteria (verify manually before calling “done”)

- [ ] No forced 2-second full-site lockout on repeat visits (or documented first-visit-only behavior).
- [ ] Home page has at most one optional carousel, or none; core content is scannable without interaction.
- [ ] Brand line (legal name vs. TSMC Medical Supply) is consistent in hero, nav, and footer.
- [ ] All client/partner images have meaningful `alt` text.
- [ ] `/tsmc` shows category filters or chips and empty/search result feedback.
- [ ] News is either linked in nav + routed, or removed from lazy routes until ready.
- [ ] `prefers-reduced-motion` respected on auto-playing UI.
- [ ] Lighthouse / manual check: no major layout shift on hero and logo grid.

---

## 2. Phase 0: Foundation & design system

**Purpose:** Establish tokens and patterns before large page edits so refactors stay consistent.

**Primary files:** `tailwind.config.js`, `src/index.css`, `index.html` (font links)

### 2.1 Typography

- [ ] Add **Outfit** for headings and **Inter** for body (Google Fonts or self-hosted in `public/`).
- [ ] Extend `tailwind.config.js` `fontFamily`: `heading`, `sans`.
- [ ] Apply `font-heading` to `h1`–`h3` globally or via `@layer base` in `index.css`.
- [ ] Audit heading sizes on Home, TSMC, About, Contact for one scale (e.g. `text-3xl` / `text-4xl` / `text-5xl`).

### 2.2 Color tokens

- [ ] Add semantic `brand` and `accent` palettes in `tailwind.config.js` (align with `IMPLEMENTATION_UPDATE.md` HSL values).
- [ ] Replace ad-hoc `indigo-600` usage with `brand-600` (or chosen primary) in a phased pass—start with new/edited sections.
- [ ] Define CSS variables in `index.css` for gradients used on heroes (`--gradient-hero`, etc.) if helpful.

### 2.3 Spacing, radius & shadows

- [ ] Standardize card style: e.g. `rounded-xl`, `shadow-lg`, `border border-gray-200`.
- [ ] Standardize section vertical rhythm: `py-16` or `py-20` consistently.
- [ ] Document chosen tokens in a short comment block at top of `index.css` or in this file’s appendix.

### 2.4 Shared UI primitives (optional but recommended)

- [ ] Create `src/components/ui/SectionHeading.tsx` (title + subtitle + optional action).
- [ ] Create `src/components/ui/Button.tsx` variants: primary, secondary, ghost (match Contact CTA).
- [ ] Create `src/components/ScrollReveal.tsx` (Framer `whileInView`) for reuse on About/Home—optional in Phase 2.

**Phase 0 exit checklist**

- [ ] One sample page (e.g. Contact) uses new fonts + brand colors end-to-end.
- [ ] Team agrees on primary CTA color and heading font.

---

## 3. Phase 1: Global UX blockers

**Purpose:** Fix issues that affect every visit before restructuring Home.

**Primary files:** `src/App.tsx`, `src/components/LoadingScreen.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, image-heavy pages

### 3.1 Loading screen

**Current behavior:** `App.tsx` forces `isLoading` true for 2000ms; entire app is `hidden` until then.

- [ ] **Decision:** Choose one approach (check one):
  - [ ] **A.** Remove artificial timer; hide loader when `document.readyState === 'complete'` or critical assets preload.
  - [ ] **B.** First visit only: `sessionStorage.setItem('tsmc_visited', '1')` skip on return.
  - [ ] **C.** Remove `LoadingScreen` entirely; rely on route-level `Suspense` fallback only.
- [ ] Align `LoadingScreen` logo URL with navbar (single canonical logo asset path).
- [ ] Ensure loader does not block accessibility tree (`aria-busy`, focus trap not needed for brief splash).
- [ ] Remove `hidden` class toggle on main layout if loader is non-blocking.

### 3.2 Brand naming (TwinJ3 vs. TSMC)

- [ ] **Copy decision:** Document approved hierarchy, e.g.  
  *“TSMC Medical Supply — a division of TwinJ3 Sales and Marketing Corp.”*
- [ ] Update `Home.tsx` hero `h1` / subline to match decision.
- [ ] Verify `Navbar`, `Footer`, `TSMC.tsx` hero, and `index.html` `<title>` / meta description match.
- [ ] Remove decorative `border-2 border-indigo-600` on hero logo if replacing with cleaner hero layout (Phase 2).

### 3.3 Image consistency

- [ ] **Canonical logo:** One URL/path used in Navbar, LoadingScreen, Home hero, favicon if applicable.
- [ ] Use `ProgressiveImage` (or consistent `loading="lazy"` + dimensions) on:
  - [ ] Home client logo grid
  - [ ] TSMC product cards
  - [ ] Home hero (if kept as image)
- [ ] Add `width` / `height` or aspect-ratio containers on logo grid to reduce CLS.
- [ ] Prefer same CDN/host pattern; document in comment which asset is “source of truth.”

### 3.4 Remove duplicate “Why choose us” (prep)

- [ ] Mark Home “Why Choose TSMC” section for removal or merge in Phase 2.
- [ ] Keep single authoritative trio on `/tsmc` OR move to About—document choice.

**Phase 1 exit checklist**

- [ ] Cold load feels instant or &lt; 500ms to interactive content (subjective test).
- [ ] Brand string consistent on Home, nav, footer, browser tab.

---

## 4. Phase 2: Homepage redesign

**Purpose:** Replace dual-carousel layout with a scannable B2B funnel.

**Primary file:** `src/pages/Home.tsx`  
**May add:** `src/components/home/Hero.tsx`, `ProofStrip.tsx`, `CategoryTiles.tsx`, `TrustSection.tsx`, `CtaBand.tsx`

### 4.1 Information architecture

Target flow: **Hero → Proof strip → Category entry → Trust (logos + one quote) → CTA band**

- [ ] Remove or drastically shorten **Featured Products** auto-carousel.
- [ ] Remove or convert **Proven Clinical Impact** carousel to static **Proof strip** (3–4 metrics).
- [ ] Remove duplicate **Why Choose** cards (see Phase 1.4).
- [ ] Keep **Featured Clients** as logo grid with fixes below.

### 4.2 Hero section

- [ ] Split or full-bleed layout: headline, subcopy, two CTAs (`/tsmc`, `/contact` or quote query).
- [ ] Optional: reuse `/tsmc`-style background image with gradient overlay (Unsplash or brand asset).
- [ ] Resolve TwinJ3 / TSMC copy per Phase 1.2.
- [ ] Mobile: stack CTAs full-width; test at 320px width.

### 4.3 Proof strip (from impact stories data)

- [ ] Extract metrics from existing `impactStories` array into static cards (no auto-play).
- [ ] Layout: 2×2 grid mobile, 4 columns desktop.
- [ ] Optional link: “Learn more” → `/about`.

### 4.4 Category entry (replaces product carousel)

- [ ] Derive categories from `src/data/products.ts` (`category` field)—unique list.
- [ ] Render tile per category with icon or representative image.
- [ ] Link to `/tsmc` with query or hash, e.g. `/tsmc?category=Diagnostics` (implement filter read in Phase 3).
- [ ] Optional: show product count per category on tile.

### 4.5 Trust section

- [ ] Logo grid: replace `Client 1`…`Client N` with real institution names in `alt` and `title`.
- [ ] Single featured quote (pick best `impactStories` testimonial OR new copy with named hospital if available).
- [ ] Drop generic “Healthcare Partner / Leading Medical Institution” unless real names supplied.

### 4.6 Closing CTA band

- [ ] Full-width section: headline + “Contact us” + click-to-call / email (mirror `Footer.tsx` data).
- [ ] Reuse phone/mail from footer to avoid duplicate content maintenance—consider shared `src/data/contact.ts`.

### 4.7 Homepage carousel policy (if any remain)

- [ ] If one carousel kept: pause on hover/focus; no autoplay under `prefers-reduced-motion` (Phase 5).
- [ ] Prefer manual navigation only for any remaining slider.

**Phase 2 exit checklist**

- [ ] Home scroll depth reduced (~30–50% fewer “full viewport” blocks vs. before).
- [ ] User can reach product categories without interacting with a slider.
- [ ] No duplicate feature trio vs. `/tsmc`.

---

## 5. Phase 3: Products page discovery

**Purpose:** Make `/tsmc` the catalog hub; support links from Home category tiles.

**Primary file:** `src/pages/TSMC.tsx`  
**Data:** `src/data/products.ts`

### 5.1 URL-driven category filter

- [ ] Read `category` from `useSearchParams()` (React Router).
- [ ] On mount, if `?category=` present, set filter state and scroll to grid.
- [ ] Category chips sync with URL (clicking chip updates query string).

### 5.2 Filter chips & search together

- [ ] Render horizontal chip list: “All” + each unique category.
- [ ] Active chip: brand background; inactive: outline/gray.
- [ ] Combine with existing text search (AND logic: category + search term).

### 5.3 Search UX feedback

- [ ] Show result count: “Showing 8 of 24 products”.
- [ ] Empty state when `filteredProducts.length === 0`: message + “Clear filters” button.
- [ ] Clear filters resets search + category + URL params.

### 5.4 Product cards (light touch)

- [ ] Ensure hover state does not cause layout shift (`hover:scale-105` → subtle shadow only if CLS issues).
- [ ] Consistent image aspect ratio in card (`aspect-square` or `h-48` object-contain).
- [ ] Optional (UI only): “Compare” checkbox on card storing slugs in `localStorage` or React context—defer if scope tight.

### 5.5 TSMC page deduplication

- [ ] If Home no longer has feature trio, keep one trio on `/tsmc` OR move to About—verify no third copy on About.

**Phase 3 exit checklist**

- [ ] Home category tile lands on filtered `/tsmc` grid.
- [ ] Search + chip filters work in combination.
- [ ] Empty and “clear” states tested.

---

## 6. Phase 4: Navigation, footer & News

**Purpose:** Complete site map, surface built-but-unwired pages, improve wayfinding.

**Primary files:** `src/App.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/pages/News.tsx`, `src/pages/NewsDetail.tsx`

### 6.1 News — decision & wiring

- [ ] **Decision:** Ship News or defer?
  - [ ] **Ship:** Add routes in `App.tsx`:
    - [ ] `/news` → `News`
    - [ ] `/news/:slug` → `NewsDetail`
  - [ ] **Defer:** Remove lazy imports until ready; add TODO in this doc.
- [ ] If shipping: add “News & Events” to desktop + mobile nav.
- [ ] If shipping: add News link in footer sitemap.
- [ ] Verify sample data in `News.tsx` / `NewsDetail.tsx` is acceptable for production or mark as placeholder.

### 6.2 Navbar improvements

- [ ] Add News nav item (if shipping).
- [ ] Consider friendlier label: “Products” linking to `/tsmc` (optional; keep URL or add redirect later).
- [ ] Optional: sticky condensed nav on scroll (smaller logo)—low priority.
- [ ] Active state for `/news` routes.

### 6.3 Footer as sitemap hub

- [ ] Multi-column layout: **Company** (About, News), **Products** (/tsmc), **Contact**.
- [ ] Keep existing address / phone / email blocks.
- [ ] Copyright year dynamic (already `currentYear`—verify).
- [ ] Optional: social links if assets exist.

### 6.4 Contact path consistency

- [ ] “Get Quote” links use `/contact?service=medical` consistently (Home, ProductDetail, TSMC cards).
- [ ] Contact page pre-fills service from query if not already.

**Phase 4 exit checklist**

- [ ] Every routable page reachable from nav or footer.
- [ ] No orphan pages in `src/pages/` without a route (except intentional).

---

## 7. Phase 5: Accessibility & motion

**Purpose:** WCAG-minded patterns and respectful motion across carousels and modals.

**Files:** `Home.tsx`, `ProductDetail.tsx`, `ContactForm.tsx`, `Navbar.tsx`, `src/styles/animations.css`, global CSS

### 7.1 Reduced motion

- [ ] Add hook or CSS: `@media (prefers-reduced-motion: reduce)` disable autoplay intervals.
- [ ] Disable or shorten Framer transitions when reduced motion preferred.
- [ ] Document in `animations.css` which classes respect the media query.

### 7.2 Carousels (any remaining)

- [ ] `aria-roledescription="carousel"` on container where applicable.
- [ ] `aria-live="polite"` region announcing slide change (visible text or sr-only).
- [ ] Pause autoplay on `mouseenter` / `focusin`; resume on leave (if autoplay kept).
- [ ] Dots/buttons: `aria-label` includes item name not only index (“Go to Diagnostics product”).
- [ ] Keyboard: arrow keys for slide change where focus is inside carousel.

### 7.3 Focus & modals

- [ ] `ContactForm` modal: focus trap, return focus on close, Escape to close.
- [ ] `ProductDetail` lightbox: verify Escape and focus (partially done—retest after Home changes).
- [ ] Mobile nav: focus first link on open; Escape closes drawer.

### 7.4 Color contrast

- [ ] Check indigo/brand text on `indigo-50` and gradient heroes (WCAG AA 4.5:1 body, 3:1 large text).
- [ ] Fix failing pairs in `index.css` or Tailwind classes.

### 7.5 Forms

- [ ] Associate all `ContactForm` errors with `aria-describedby` / `aria-invalid`.
- [ ] Success state announced via `role="status"` or `aria-live`.

**Phase 5 exit checklist**

- [ ] Tab through Home → Products → Contact without keyboard traps.
- [ ] macOS VoiceOver or NVDA spot-check on one carousel and contact form.

---

## 8. Phase 6: Polish, QA & launch

**Purpose:** Cross-page consistency, performance smoke test, and sign-off.

### 8.1 Cross-page consistency pass

- [ ] All pages use `font-heading` / brand tokens where Phase 0 defined.
- [ ] Page heroes follow one of two patterns: **marketing hero** (image + gradient) or **simple hero** (title + subtitle).
- [ ] `AnimatedTransition` still feels good with shorter loader; tune duration if flashes occur.
- [ ] `PageLoadingFallback` in `App.tsx` matches brand (optional skeleton with logo).

### 8.2 Product detail alignment

- [ ] `ProductDetail.tsx` tabs: ensure `role="tablist"` / `role="tab"` / `aria-selected` (may partially exist—audit).
- [ ] Breadcrumb or back link consistent with new nav labels.

### 8.3 About page

- [ ] Remove third copy of feature cards if duplicated.
- [ ] Align timeline/story with TwinJ3 / TSMC naming from Phase 1.

### 8.4 Performance (frontend-only)

- [ ] Lazy routes still split Home, TSMC, About, ProductDetail, Contact, News.
- [ ] Large images: `loading="lazy"` below fold; priority only for LCP hero if needed.
- [ ] Run `npm run build` and note bundle size delta.
- [ ] Optional: `npx update-browserslist-db@latest` (dev warning in terminal).

### 8.5 SEO (markup only, no backend)

- [ ] Unique `<title>` and meta description per route (React Helmet or `index.html` + route effect—choose one approach).
- [ ] Meaningful `h1` per page (only one primary `h1`).
- [ ] Optional: JSON-LD `Organization` on Home (static script in component)—defer to `IMPLEMENTATION_UPDATE.md` pillar 4 if timeboxed.

### 8.6 Manual test matrix

| Flow | Desktop | Mobile |
|------|---------|--------|
| First visit load | ⬜ | ⬜ |
| Return visit load | ⬜ | ⬜ |
| Home → category → product detail | ⬜ | ⬜ |
| Search + filter on /tsmc | ⬜ | ⬜ |
| Contact / quote CTA | ⬜ | ⬜ |
| News list + article (if shipped) | ⬜ | ⬜ |
| Mobile nav open/close | ⬜ | ⬜ |
| Reduced motion on | ⬜ | ⬜ |

**Phase 6 exit checklist**

- [ ] All phases 0–5 checklists above marked complete or explicitly deferred with reason.
- [ ] Stakeholder sign-off on copy (brand names, testimonials, client alts).

---

## 9. File impact matrix

| File | Phases | Nature of change |
|------|--------|------------------|
| `tailwind.config.js` | 0 | Fonts, colors, extensions |
| `src/index.css` | 0, 5 | Base styles, motion queries |
| `index.html` | 0, 6 | Font preconnect, default meta |
| `src/App.tsx` | 1, 4, 6 | Loader logic, News routes |
| `src/components/LoadingScreen.tsx` | 1 | Logo URL, behavior |
| `src/components/Navbar.tsx` | 4, 5 | News link, a11y |
| `src/components/Footer.tsx` | 4 | Sitemap columns |
| `src/pages/Home.tsx` | 1, 2, 5 | Major restructure |
| `src/pages/TSMC.tsx` | 3 | Filters, URL params, empty state |
| `src/pages/ProductDetail.tsx` | 5, 6 | a11y audit |
| `src/pages/About.tsx` | 1, 6 | Dedup features, copy |
| `src/pages/Contact.tsx` | 4, 5 | Query prefill, form a11y |
| `src/pages/News.tsx` | 4 | Route only or content |
| `src/pages/NewsDetail.tsx` | 4 | Route only or content |
| `src/components/ProgressiveImage.tsx` | 1, 3 | Wider adoption |
| `src/components/ContactForm.tsx` | 5 | a11y |
| `src/components/AnimatedTransition.tsx` | 5, 6 | Reduced motion |
| `src/styles/animations.css` | 5 | `prefers-reduced-motion` |
| `src/data/products.ts` | 3 | Read-only; maybe export `categories` helper |
| `src/data/contact.ts` | 2, 4 | **New** optional shared contact constants |

---

## 10. Suggested timeline

Estimates assume one developer, frontend only.

| Week | Phases | Deliverable |
|------|--------|-------------|
| 1 | 0 + 1 | Tokens live; loader fixed; brand + images unified |
| 2 | 2 | New Home live behind review |
| 3 | 3 + 4 | Product filters + nav/footer/News decision |
| 4 | 5 + 6 | a11y pass, QA matrix, launch |

Adjust if News is deferred—Phase 4 shrinks by ~0.5 day.

---

## 11. Master checklist (copy for PRs)

Use this condensed list in PR descriptions or project boards.

### Foundation
- [ ] Outfit + Inter wired in Tailwind
- [ ] Brand/accent color tokens in `tailwind.config.js`
- [ ] Shared section/button patterns agreed

### Global
- [ ] Loading screen: no arbitrary 2s block
- [ ] Single canonical logo asset
- [ ] TwinJ3 / TSMC copy approved site-wide
- [ ] ProgressiveImage / lazy + dimensions on grids

### Homepage
- [ ] Hero redesigned (CTAs + clear brand)
- [ ] Static proof strip (metrics)
- [ ] Category tiles → `/tsmc?category=`
- [ ] Client logos: real `alt` text
- [ ] One testimonial (named if possible)
- [ ] CTA band with contact info
- [ ] Dual carousels removed or reduced

### Products (`/tsmc`)
- [ ] Category chips + URL params
- [ ] Result count + empty state + clear filters
- [ ] Home deep-links work

### Nav & footer
- [ ] Footer sitemap columns
- [ ] News routed OR removed from bundle
- [ ] Nav includes News (if shipped)

### Accessibility
- [ ] `prefers-reduced-motion` honored
- [ ] Carousel a11y (if any left)
- [ ] Contact form / modal focus + announcements
- [ ] Contrast pass on heroes

### Launch
- [ ] Manual test matrix complete
- [ ] `npm run build` succeeds
- [ ] Stakeholder copy sign-off

---

## Appendix A: Copy worksheet (fill before Phase 2)

| Location | Current | Approved copy |
|----------|---------|----------------|
| Home `h1` | TwinJ3 Sales and Marketing Corp. | _TBD_ |
| Home subline | Your trusted partner… | _TBD_ |
| Legal/footer line | TSMC Medical Supply | _TBD_ |
| Featured quote attribution | Healthcare Partner | _TBD_ |
| Client logo 1 alt | Client 1 | _TBD_ |
| … | … | … |

---

## Appendix B: Explicitly out of scope (this plan)

- Supabase schema changes, new Edge Functions, or contact API changes
- CMS integration for News/products
- Fuzzy search backend, product comparison persistence across devices
- Full JSON-LD program (see `IMPLEMENTATION_UPDATE.md` for later)
- `npm audit fix` / dependency upgrades unless blocking build

---

## Document history

| Date | Author | Notes |
|------|--------|-------|
| 2026-06-03 | — | Initial plan from frontend review brainstorm |

---

*Update checkboxes in this file as work completes. Change Phase status in [Progress overview](#progress-overview) when a full phase is done.*
