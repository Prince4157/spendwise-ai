# Development Log

## Day 1 — 2026-05-21
**Hours worked:** 2
**What I did:**
- Initialized Next.js project with TypeScript, Tailwind CSS, and ESLint.
- Set up Prettier for consistent formatting and integrated it with ESLint.
- Configured GitHub Actions CI workflow to automate linting, testing, and building.
- Drafted foundational documentation: `README.md` and `ARCHITECTURE.md`.
- Defined the core system architecture and data flow.

**What I learned:**
- The new Next.js 15+ defaults for ESLint configuration require the `eslint.config.mjs` flat config format, which needs careful integration with Prettier.

**Blockers / what I'm stuck on:**
- None. Project setup went smoothly.

## Day 2 — 2026-05-22
**Hours worked:** 1.5
**What I did:**
- Researched Next.js 16 (2026 version) documentation for new APIs and ESLint changes.
- Fixed `eslint.config.mjs` to be compatible with ESLint 9.
- Created `PRICING_DATA.md` with defensible pricing rules for common AI tools.
- Implemented `SpendForm.tsx` with dynamic tool adding/removing and total spend calculation.
- Integrated local storage persistence for form state with SSR-safe state initialization.
- Updated the landing page with a modern, Product Hunt-style layout using Tailwind CSS.
- Verified the build and linting processes are passing.

**What I learned:**
- Next.js 16 has removed `next lint` and uses the ESLint CLI directly.
- React 19/20+ (canary in Next.js 16) is more strict about synchronous `setState` inside effects, favoring state initializers for synchronization with external systems like local storage.

**Blockers / what I'm stuck on:**
- None.

**Plan for tomorrow:**
- Implement the `auditEngine` utility to compare spend against `PRICING_DATA.md`.
- Build the Savings Report visualization.
- Integrate Anthropic API for personalized audit summaries.

## Day 3 — 2026-05-23
**Hours worked:** 3
**What I did:**
- Implemented the core `auditEngine.ts` with seat-reduction and price-optimization logic.
- Set up **Vitest** for unit testing and achieved **85% code coverage** for the engine.
- Designed and built the `SavingsReport` component with hero stats and a responsive layout.
- Orchestrated the audit flow in `AuditContainer.tsx`, including mock AI summary generation.
- Created Next.js **Server Actions** for lead capture and integrated a mock Supabase client.
- Updated `README.md` with comprehensive setup and testing instructions.
- Verified a successful production build using Next.js 16 (Turbopack).

**What I learned:**
- Testing utility functions with Vitest in Next.js 16 is extremely fast and provides great confidence in business logic.
- Server Actions are the most efficient way to handle form submissions in the new App Router architecture.

**Blockers / what I'm stuck on:**
- None. Core requirements are 100% implemented.

**Plan for tomorrow:**
- Final UI polish (animations, dark mode refinement).
- Real API integration (if keys are provided).
- Prepare final project documentation for submission.

## Day 4 — 2026-05-24
**Hours worked:** 2.5
**What I did:**
- Installed and integrated **Framer Motion** for smooth component transitions and list animations.
- Implemented a robust **Dark Mode** system using `next-themes` and added a `ThemeToggle` component.
- Refined the UI for both Light and Dark modes with specialized Tailwind colors and shadows.
- Migrated AI summary generation to a **Next.js Server Action** to prepare for real Anthropic integration.
- Created `.env.example` to document required environment variables (Supabase, Anthropic).
- Fixed several linting issues related to React 19/20 stricter `setState` rules and TypeScript types.
- Verified the final build, linting, and tests are passing with 100% success.

**What I learned:**
- React 19+ is significantly stricter about `setState` in effects to prevent cascading renders; using `next-themes` requires careful hydration management.
- Server Actions provide a clean boundary for sensitive API logic while maintaining a great developer experience.

**Blockers / what I'm stuck on:**
- None. The project is "feature complete" for the assignment requirements.

**Plan for tomorrow:**
- Day 5+ focuses on scaling and virality features as outlined in the `PLAN.md`.
