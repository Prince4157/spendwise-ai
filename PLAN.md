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
### Phase 1: Audit Engine (Next)
- [ ] Develop `auditEngine.ts` to calculate potential savings.
- [ ] Map user input to `PRICING_DATA.md` rules.
- [ ] Implement seat optimization logic (e.g., individual to team plan transitions).

### Phase 2: Savings Report & AI Integration
- [ ] Design the Savings Report dashboard.
- [ ] Integrate Anthropic API to generate a ~100-word personalized audit summary.
- [ ] Add visualization for monthly/yearly potential savings.

### Phase 3: Lead Capture & Persistence
- [ ] Connect Supabase for lead storage.
- [ ] Implement Next.js Server Actions for form submission.
- [ ] Generate unique shareable URLs for audit reports.

## Technical Notes
- **React 20+ Compliance:** Using state initializers for synchronization with external APIs (like localStorage) to prevent cascading renders.
- **Next.js 16 Conventions:** Direct ESLint CLI usage; `next build` no longer runs linting by default.
- **Security:** Strict validation of Server Functions as they are accessible via direct POST.

---
*This file serves as the project's living documentation and action plan.*
