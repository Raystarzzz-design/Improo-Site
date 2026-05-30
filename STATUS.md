# STATUS.md — Improo Website

## Last updated
30 May 2026 (session 5)

---

## What this site is for

Improo-Site is the **public marketing website** for the Improo platform.
Its job is to:
- Explain what Improo is and why it exists
- Build an audience before the app launches (waitlist, social links)
- Publish helpful health/self-improvement content (articles, guides)
- Show a transparent roadmap of app development progress
- Act as a credible home base for people who discover Improo on social media

The site is intentionally warm and honest in tone — no hype, no fake urgency.
The core message: *small steps, real progress, you are not alone.*

The companion app is being built in `c:\projects\improo` (React Native / Expo).
Both share the same brand, colors, and Supabase backend.

---

## Hosting

- Platform: **Vercel**
- Deployed on push to `main` branch — automatic
- URL: improo.vercel.app
- Analytics: Vercel Analytics (already embedded on every page — do not remove)

---

## Pages that exist

### Main pages
| File | Title | Status |
|------|-------|--------|
| `index.html` | Homepage | ✅ Done |
| `guides.html` | Guides overview | ✅ Done |
| `roadmap.html` | Public roadmap | ✅ Done |
| `disclaimer.html` | Legal disclaimer | ✅ Done (noindex) |
| `privacy-policy.html` | Privacy Policy | ✅ Done (noindex) |
| `terms-of-service.html` | Terms of Service | ✅ Done |

### Insights (articles)
| File | Title | Date |
|------|-------|------|
| `insights/index.html` | Articles overview (with slider + filters) | ✅ Done |
| `insights/why-i-built-improo.html` | Why I Built Improo | Apr 25, 2026 |
| `insights/quit-after-3-weeks.html` | Why Most People Quit After 3 Weeks | Apr 18, 2026 |
| `insights/sleep-as-a-performance-tool.html` | Sleep as a Performance Tool | Apr 12, 2026 |
| `insights/identity-before-behavior.html` | Identity Before Behavior | May 10, 2026 |
| `insights/nutrition-movement-combined.html` | Nutrition + Movement Combined | Date unknown |

### Belt Challenge pages
| File | Title | Status |
|------|-------|--------|
| `Improo-belt-challenges.html` | Belt Challenges overview | ✅ Done |
| `yellow-belt.html` | Yellow Belt detail (4 phases, 7–70 days) | ✅ Done |
| `green-belt.html` | Green Belt detail (4 phases, 7–70 days) | ✅ Done |
| `black-belt.html` | Black Belt detail (3 phases, 21–70 days) | ✅ Done |

### Guides (deep-dive explainers)
| File | Title | Status |
|------|-------|--------|
| `guides/intermittent-fasting.html` | What is Intermittent Fasting? | ✅ Done |
| `guides/what-is-keto.html` | What is Keto? | ✅ Done |
| `guides/what-is-carnivore.html` | What Is the Carnivore Diet? | ✅ Done |

### Images
| File | Used for |
|------|---------|
| `images/logo.png` | Logo |
| `images/app.jpg` | Phone mockup on homepage (app preview) |
| `images/ray-avatar.webp` | Founder photo in mission quote |
| `images/sleep-as-a-tool.jpg` | Article hero image |
| `images/products/` | dripdrop.png, magnesium-glycinate.webp, oura-ring.webp, mct-oil.png, ketoscan.png, lavatools-javelin.webp (upload pending) |

---

## What is on the homepage (index.html)

1. **Hero** — tagline + 3 statistics (80% / 95% / 65%) + CTA to waitlist
2. **How improvement works** — 6-step visual strip (Awareness → Habit)
3. **Mission / About** — founder quote, link to "Why I Built Improo" article
4. **Pillars** — 4 cards: Honest content / Real community / Recognition / Your pace
5. **App preview + roadmap steps** — phone mockup + 4-phase progress (Planning ✓ / Building ✓ / Testing ··· / Launch +)
6. **Insights preview** — 4 article cards linking to insights
7. **Waitlist CTA** — email form (see known issues below)
8. **Footer** — nav links, social links, contact email
9. **Contact popup** — modal form that opens email client

---

## Guides listed as "Coming soon" (not yet built)

### Diets & Nutrition
- Mediterranean Diet

### Supplements
- What is Creatine?
- What is Magnesium?
- What is Whey Protein?

### Movement
- What is Zone 2 Training?
- What is Progressive Overload?
- What is HIIT?

### Mindset
- What is Habit Stacking?
- What is Identity-Based Change?
- What is the 2-Minute Rule?

---

## Known issues / things to fix

1. **Waitlist form is not connected to a real backend.**
   The form currently uses `mailto:` — it opens the user's email client.
   It should submit to Supabase (`waitlist_subscribers` table) via fetch.
   The roadmap itself still lists "Waitlist / email capture" as "Soon" even
   though the form visually exists on the homepage.

2. **`why-i-built-improo.html` has outdated navigation.**
   Its nav links point to `#features` and `#roadmap` anchor IDs on index.html —
   those sections have been restructured and those anchors no longer exist.
   Also uses `images/logo.webp` which does not exist (only `logo.png` does).

3. **Nav order is inconsistent between pages.**
   - `index.html`: Home · Articles · Guides · Roadmap · Contact
   - `roadmap.html`: Home · Roadmap · Articles · Guides · Contact
   All pages should use the same order.

4. **`styles-dark-backup.css.css`** is an old backup file in the project root.
   It is not linked anywhere and should be deleted (ask Ramon first).

5. **`insights/nutrition-movement-combined.html`** exists as a file but is not
   listed in the insights index or on the homepage — it may be unpublished/draft.

---

## Completed this session (session 5)

- `roadmap.html` — carnivore guide blauw-italic h2 accenten toegevoegd, mid-2026 note in Improo tip
- STATUS.md bijgewerkt met belt-pagina's die Ramon via GitHub heeft toegevoegd

## Completed this session (session 4)

- `roadmap.html` — Phase 2: Groups, Backend setup en Legal framework gemarkeerd als done (groene checkmark). Phase 3: "Points system" en "Payment integration (Stripe)" verwijderd.
- `guides/what-is-carnivore.html` — nieuw volledig uitgewerkte guide aangemaakt (11 secties, 2 inline SVG charts, hero-visual, sidebar met adaptation stages, 2 productkaarten). Productkaarten: REDMOND Re-Lyte (affiliate: https://amzn.to/4dHeD6f, image: dripdrop.png) + Lavatools Javelin (affiliate: https://amzn.to/4f4Kn7O, image: lavatools-javelin.webp — nog te uploaden).
- `guides.html` — Carnivore Diet kaart geactiveerd in de Diets & Nutrition sectie.

## Completed this session (session 3)

- `insights/still-here-still-building.html` — nieuw artikel opgehaald van GitHub, blauw-italic `<em>` toegevoegd aan alle h2-koppen, stress-depletion cycle SVG volledig herbouwd als cirkeldiagram met dikke pijlen (zoals referentieafbeelding)
- `insights/index.html` — aanpassingen opgehaald van GitHub

## Completed this session (session 2)

- `why-i-built-improo.html` — nav hersteld (logo, links, social icons), broken "More Insights" links gefixed, footer bijgewerkt
- `identity-before-behavior.html` — nav-container breedte gelijkgetrokken met artikel (740px)
- `guides.html` — Magnesium kaart geactiveerd (donker + "Read guide →" link)
- `guides/Magnesium.html` — volledig herschreven: zelfde layout/kleur/fonts als intermittent-fasting.html, vertaald naar Engels, product cards bijgewerkt (Oura Ring 4 + NEW AGE Magnesium Complex), Improo tip sectie verwijderd, secties hernummerd
- `images/products/magnesium-glycinate.webp` — productafbeelding toegevoegd
- `images/products/oura-ring.webp` — productafbeelding toegevoegd
- CLAUDE.md en STATUS.md aangemaakt voor Improo-Site project

## What still needs to be built

### High priority
- [ ] Connect waitlist form to Supabase (real email capture)
- [ ] Fix navigation in `why-i-built-improo.html`
- [ ] Standardise nav order across all pages
- [ ] Upload `lavatools-javelin.webp` naar `images/products/` (carnivore guide thermometer kaart)

### Content
- [ ] Write the remaining 9 "Coming soon" guides (Mediterranean Diet + 8 others)
- [ ] More insight articles (aim: 1–2 per month)
- [ ] Publish or remove `nutrition-movement-combined.html`

### Features
- [ ] App download buttons (when Android beta is live, mid-2026)
- [ ] SEO: meta tags audit, Open Graph images for articles
- [ ] Social sharing buttons on articles

### Optional / future
- [ ] Search across articles and guides
- [ ] Newsletter (email list beyond basic waitlist)
- [ ] Dark mode (backup CSS exists — `styles-dark-backup.css.css`)

---

## Technical setup (quick reference)

- Plain HTML + CSS + vanilla JS — no build tool, no framework
- One shared stylesheet: `styles.css`
- Fonts via Google Fonts CDN: **Sora** (UI) + **Lora** (article headings)
- Icons via CDN: **Tabler Icons** webfont
- Colors: primary `#2563eb`, accent `#3b9ef5`, text `#0f1f3d`, muted `#4a6fa5`
- Contact form: opens `mailto:` (not a backend form)
- No video, no cookies banner yet, no analytics beyond Vercel
