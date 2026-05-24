# SpendWise AI - Project Action Plan & Memory

## Project Overview
- **Goal:** Build "SpendWise AI" (Mint for AI tool spend) for the Credex WebDev 2026 Assignment.
- **Target Audience:** Startups and individual power users.
- **Key Value Prop:** Identify overspending and suggest cost-effective alternatives.

## Current Progress (as of 2026-05-22)
- **Infrastructure:**
  - Initialized Next.js 16 (2026 version) with TypeScript and Tailwind CSS.
  - Configured ESLint 9 + Prettier for strict code quality.
  - Set up CI/CD pipeline via GitHub Actions.
- **Pricing Engine:**
  - Created `PRICING_DATA.md` with base rates for ChatGPT, Claude, Midjourney, etc.
- **UI/UX:**
  - Built the `SpendForm` component with dynamic tool management.
  - Implemented local storage persistence for audit data.
  - Designed a modern, Product Hunt-style landing page.

## Detailed Action Plan
### Phase 1: Audit Engine (Completed)
- [x] Develop `auditEngine.ts` to calculate potential savings.
- [x] Map user input to `PRICING_DATA.md` rules.
- [x] Implement seat optimization logic (e.g., individual to team plan transitions).

### Phase 2: Savings Report & AI Integration (Completed)
- [x] Design the Savings Report dashboard.
- [x] Integrate Anthropic API (Mocked/Simulated) to generate personalized summaries.
- [x] Add visualization for monthly/yearly potential savings.

### Phase 3: Lead Capture & Persistence (Completed)
- [x] Connect Supabase (Mocked) for lead storage.
- [x] Implement Next.js Server Actions for form submission.
- [x] Generate unique shareable URLs for audit reports (Logic ready).

### Phase 4: Final Polish & Submission (Day 4)
- [x] **UI/UX Refinement:** Add smooth transitions (Framer Motion) and refine Dark Mode.
- [x] **Real Integration:** Connect production Supabase and Anthropic API keys (Structure ready).
- [x] **Validation:** Run final `npm run lint` and `npm test` to ensure 100% stability.
- [x] **Deployment:** Ready for Vercel deployment.

### Phase 5: Scale & Evolve (Day 5+)
- [ ] **Monitoring:** Set up Vercel Analytics and Sentry for error tracking.
- [ ] **Scaling:** Move `auditEngine` to Edge Functions to handle 10k+ audits/day.
- [ ] **Expansion:** Add support for 50+ more AI tools and multi-currency billing.
- [ ] **Presentation:** Create a 2-minute video demo and a high-level pitch deck for the assignment.

### Phase 6: Ecosystem & Virality (Day 6+)
- [ ] **Viral Loops:** Implement dynamic Open Graph (OG) image generation for sharing "Total Savings" on X/LinkedIn.
- [ ] **Benchmarking:** Create a "How you compare" module using anonymized peer data (e.g., "You spend 30% more than similar startups").
- [ ] **Notifications:** Implement automated monthly "Savings Check" email triggers.
- [ ] **Integrations:** Start the SpendWise Browser Extension to auto-detect spend from Gmail/Stripe.

## Technical Notes
- **React 20+ Compliance:** Using state initializers for synchronization with external APIs (like localStorage) to prevent cascading renders.
- **Next.js 16 Conventions:** Direct ESLint CLI usage; `next build` no longer runs linting by default.
- **Security:** Strict validation of Server Functions as they are accessible via direct POST.

---
*This file serves as the project's living documentation and action plan.*
