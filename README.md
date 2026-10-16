# Crystal Kizor — single-page landing

A premium, fast, hospitable one-pager that brings Crystal Kizor's seven brands and
initiatives together under one personal brand — with a clear hierarchy and a clear
next step for every visitor.

- **Live page:** `index.html` (self-contained; inline CSS + vanilla JS)
- **Part 2 — AI product thinking:** below (≤300 words)
- **Part 3 — analytics & improvement:** below
- **Submission note:** below

> **Assets not received.** The brief's asset folder (professional photos of Crystal,
> Crystal Kizor logo/wordmark, brand logos, project/brand imagery, links) did not get
> to me. There is therefore **no logo and no real photography** in this submission.
> The wordmark is a styled text treatment, brand marks are labelled chips, and all
> imagery is **temporary stock** standing in for final assets — flagged in the UI
> (hero caption + footer: *"Temporary stock imagery — final photography to replace"*).
> To swap in real assets, see *Replacing placeholders*.

---

## The thinking (Part 1)

### The problem I designed for

Crystal does many things — architecture, interiors, furniture, education, speaking, a
youth movement, an education charity, research and writing. A literal one-page list of
seven brands reads like a directory and communicates nothing. The job was to find the
**single idea that connects them**, then arrange everything by how close it sits to that
idea, so a stranger instantly gets *who she is* and *where to go next*.

### The organising idea

Everything Crystal does answers one question: **how do we build better for hot climates
and the people who live in them?** So the page is built as **one thesis, expressed at four
distances from the practice** — this is the spine of the whole page:

| Layer | What it is | Brands |
|---|---|---|
| **01 The practice** | The engine — where things get designed and built | Studio COKA ★ flagship |
| **02 The expressions** | The practice made tangible & shareable | ELEvated · The Effective Architect · Speaking |
| **03 The commitments** | The causes she gives her platform to | AKO Alliance · Alive and Free |
| **04 The person** | The research, writing and ideas that feed everything | Crystal Kizor |

This does three things a flat list can't: it **ranks** the brands (Studio COKA gets a
full flagship section), it **connects** them (one shared philosophy), and it gives **AKO
Alliance and Alive and Free** a home as commitments rather than awkward add-ons.

### Design direction — Tropical Sanctuary

The thesis is about *comfort without excess* — the design feels like the buildings it celebrates: calm, shaded, breathable. Cream `#FBF6EC`, deep forest
`#1C3329`, clay `#C57A52`, sage and sand; arched image openings (shade/veranda);
generous whitespace; hospitality over monumentality. It flatters interiors and
furniture (ELEvated), keeps education approachable (TEA), and suits the faith/youth
commitments — while still carrying a flagship Studio COKA section with full weight.

- **Type:** *Cormorant Garamond* (soft editorial serif, italic accents) for statements;
  *Outfit Light* for body/UI clarity.
- **Nav as the product UI:** full hero-content width on load (same `.wrap` as the hero,
  so edges align exactly), then collapses to a compact floating pill past 32px scroll.
  Real anchor links to every section + burger menu on mobile.
- **Hero fits the screen:** `min-height: calc(100svh - 108px)` with the trio capped at
  ~30/36vh, so headline, CTAs, stats and all three arches are visible in one viewport.
- **Motion is subtle:** staggered fade-up on load, slow zoom-out on hero images, hover
  lifts, scroll reveals — all disabled under `prefers-reduced-motion`.
- **Buttons:** zero underlines globally (`text-decoration: none`), pill shape, lift on hover.

### Hierarchy & routing

- **Hero** states the positioning (*Rooms that breathe, buildings that belong*), two
  doors (*explore / find your path*), proof stats (100k+ sqm, 2019 off-grid hospital, TEDx).
- **Thesis band** states the one line everything hangs from.
- **Ecosystem** shows the four layers as numbered tiers.
- **Studio COKA flagship** — full feature section with services, stats, imagery slot.
- **Expressions** (ELEvated / TEA / Speaking) and **Commitments** (AKO / Alive and Free)
  follow as cards, each with its own image and next step.
- **Research & writing** gives the personal-brand work (framework, essays, TEDx) a home.
- **About** carries credentials (Nsukka, Coventry, Cambridge).
- **"What brings you home today?"** routes five visitor types (client, customer,
  architect, host, ally) to distinct destinations — no generic "Contact us".
- **Contact** closes with newsletter capture (validated, labelled) + direct channels.

### Technology choice

A **hand-built static page** — one self-contained `index.html` (inline CSS, ~40 lines of
vanilla JS for nav state, reveals, menu, newsletter confirmation). No framework: nothing
to hydrate, tiny bundle, deploys anywhere. Design tokens as CSS custom properties so a
component library or CMS can grow from it. Accessibility and performance treated as
requirements.

---

## Part 2 — AI product thinking (≤300 words)

**Brand: The Effective Architect (TEA). Tool: TEA Practice Coach.**

**What it does.** Upload a plan/sketch or answer a short brief; get a structured review
mapped to TEA's Tropical Design Framework — passive cooling, ventilation, shading,
orientation, materials — plus one learning note and three next actions. Remembers projects over time.

**Who it's for.** Early/mid-career architects and built-environment professionals in hot
climates, plus students.

**Problem.** Climate-responsive knowledge is scattered and expert feedback scarce, so
juniors default to imported air-conditioned solutions. They need teachable feedback, not a verdict.

**Use.** Create project → answer 15 guided questions (or upload plan) → scored review
against eight principles → iterate → weekly email practising one principle.

**Technology.** Claude via Anthropic API for text+image reasoning — reliable explained
judgement against a nuanced rubric; structured JSON outputs map to the framework. Plans
rasterised with pdf.js on a Cloudflare Worker; Postgres (Supabase) + pgvector grounds
advice in TEA sources, not generic AI. Next.js + Hono.

**First version.** Text-only: 15 questions, one Claude call with rubric + worked examples,
JSON review page. Vision grounding follows after validation.

**Limitations & safeguards.** A coach, never an authority: no structural/code/life-safety
certification; labelled guidance + licensed-professional referral. TEA-grounding prevents
invented standards. Plans encrypted, never trained on, clear retention. Rate limits control
cost; hot-climate scope stated. *(~215 words)*

---

## Part 3 — Analytics & improvement

**What I'd track.** Acquisition (sessions, users, channel, campaign, geography, device);
behaviour (scroll depth, sections seen, outbound clicks, downloads); conversion (enquiry /
"Start a project" primary; newsletter + bookings secondary); technical quality (Core Web
Vitals, errors, 404s, mobile speed); qualitative (heatmaps, recordings, survey).

**Tools.** GA4 + Search Console for acquisition/SEO; Plausible for privacy-friendly
real-time; Microsoft Clarity for heatmaps/recordings; Cloudflare Web Analytics for speed;
form provider for conversions; Looker Studio for one dashboard. Consent-gated, no
third-party cookies.

**How I'd use it.** Targets, weekly review, hypotheses, deliberate change: A/B test hero
promise, CTA wording/position, section order; remove friction; re-measure. Data → design → data.

**Scenario — 5,000 visitors, 5 enquiries (0.1%, vs healthy 1–3%).** Work the funnel.
*Qualified traffic?* Segment channel/keyword/geography. *Reach the CTA?* Scroll maps.
*Abandon the form?* Field-level analytics, mobile errors. *Offer clear?* Message match.
*Broken?* Failures, JS errors, slow mobile by device. Watch 20–30 recordings, read
surveys, test top two hypotheses — usually shorter higher-placed form + sharper hero
promise with proof. Iterate on enquiry rate. Likely fix: better-qualified traffic, shorter
form, clearer "what happens next".

---

## Submission note

Positioning before design: seven brands can't sit in a list, so one connecting line —
building better for hot climates — with everything ranked by distance from the practice.
The page asks *what brings you here?* instead of one generic Contact. The Sanctuary
system (cream/forest/clay, arches, Cormorant + Outfit) makes climate-responsive design
feel calm and desirable; motion respects reduced-motion; the build is a fast static page
grounded in public verifiable info.

**On missing assets:** no logo, wordmark, professional portraits, brand logos or project
photography were supplied. I used clearly-flagged temporary stock
(`assets/img/hero| coka|elevated|tea|speaking|about.jpg`) and a text wordmark so the
*structure* can be judged; nothing pretends to be final. Real assets drop straight into
the documented slots below.

---

## Run locally

```bash
# from this folder
python3 -m http.server 4321
# open http://localhost:4321
```

## Deploy

Fully static — no build step.

- **Netlify:** drag this folder onto <https://app.netlify.com/drop>, or connect the repo.
- **Vercel:** `vercel` (framework preset: *Other*), output = this folder.
- **Cloudflare Pages:** create a project, build command empty, output directory `/`.
- **GitHub Pages:** push and enable Pages (root).

## Replacing placeholders

Each image is a regular `<img src="assets/img/<name>.jpg">`. Swap the file or src:

```html
<img src="assets/crystal-portrait.jpg" alt="Portrait of Crystal Kizor" loading="lazy"
     style="width:100%;height:100%;object-fit:cover">
```

Suggested finals: portrait (hero + about), Studio COKA project photo, ELEvated furniture
shot, TEA/studio shot, Speaking stage photo. Brand logos can replace the `.chip` labels;
the Crystal Kizor text `.brand` can be swapped for the wordmark SVG.

| Slot | Current temp stock | Replace with |
|---|---|---|
| hero trio + flagship | `hero.jpg` villa, `coka.jpg` ceiling | Studio COKA project photos |
| ELEvated | `elevated.jpg` chairs | ELEvated product photography |
| TEA | `tea.jpg` night tower | Studio/classroom imagery |
| Speaking | `speaking.jpg` talk | Crystal on stage |
| About | `about.jpg` interior | Professional portrait of Crystal |

## Accessibility & performance notes

- Landmarks (`header/nav/main/footer`), skip link, visible focus, aria labels, live
  region on newsletter note, semantic heading order, descriptive alts.
- All motion disabled under `prefers-reduced-motion`; anchor smooth-scroll degrades gracefully.
- No render-blocking JS; no framework; two font families with `display=swap`; `loading="lazy"`
  below the fold; single file (~60KB HTML+CSS).
