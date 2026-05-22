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
