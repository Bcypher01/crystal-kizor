# Stage 1 — Written Responses (Parts 2 & 3)

4. Part 2 – AI Product Thinking (239/300 words):

Brand: The Effective Architect (TEA). Tool: TEA Practice Coach.


What it does: Upload a plan/sketch or answer a short brief and receive a structured review mapped to TEA's Tropical Design Framework — passive cooling, ventilation, shading, orientation, materials — plus one learning note and three next actions. Remembers projects over time.


Who it is for: Early/mid-career architects and built-environment professionals in hot climates, plus students.


Problem it solves: Climate-responsive knowledge is scattered and expert feedback is scarce, so juniors default to imported air-conditioned solutions. They need teachable feedback, not a verdict.


How someone would use it: Create project, answer 15 guided questions or upload plan, receive scored review against eight principles, iterate, then receive a weekly email practising one principle.


Technology: Claude via Anthropic API for text+image reasoning — reliable explained judgement against a nuanced rubric with structured JSON outputs. Plans rasterised with pdf.js on a Cloudflare Worker. Postgres (Supabase) + pgvector grounds advice in TEA sources, not generic AI. Next.js + Hono — my daily stack for AI streaming, model routing, and usage controls.


First version: Text-only: 15 questions, one Claude call with rubric + worked examples, JSON review page. Vision grounding follows after validation.


Limitations & safeguards: A coach, never an authority: no structural/code/life-safety certification, labelled guidance + licensed-professional referral. TEA-grounding prevents invented standards. Plans encrypted, never trained on, clear retention. Rate limits control cost. Hot-climate scope stated.


This choice draws directly on my recent work: LMS/AI-assisted learning at JST Academy, CMS publishing at CHAN/Journeying Storyteller, and real-time AI/voice with usage enforcement at TravelSpeak.


5. Part 3 – Analytics & Improvement:


What I'd track: Acquisition (sessions, users, channel, geography, device); Behaviour (scroll depth, sections seen, outbound clicks); Conversion (enquiry / "Start a project" primary; newsletter + bookings secondary); Technical (Core Web Vitals, errors, 404s, mobile speed); Qualitative (heatmaps, recordings, survey).


Tools: GA4 + Search Console for acquisition/SEO; Plausible for privacy-friendly realtime; Microsoft Clarity for heatmaps/recordings; Cloudflare Web Analytics for speed; Looker Studio for one dashboard. Consent-gated, no third-party cookies.


How I'd use it: Set targets, weekly review, hypothesise, A/B test hero promise, CTA wording/position, and section order, then re-measure.


Scenario — 5,000 visitors, 5 enquiries (0.1% vs healthy 1-3%): Work the funnel. Check qualified traffic by channel/keyword/geography. Check scroll maps for CTA reach. Check field-level form analytics and mobile errors for abandonment. Check message match and JS failures/slow mobile. Watch 20-30 recordings. Likely fix: better-qualified traffic, shorter higher-placed form, sharper hero promise with proof.


I understand everything submitted and can explain and defend every decision. My background — BTech Civil Engineering (LAUTECH 2017-2023) plus 3 years as Full-Stack Engineer with React, Next.js, TypeScript, Node.js/Hono, PostgreSQL/MongoDB, and AI integration — is detailed in my resume.
