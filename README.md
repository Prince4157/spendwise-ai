# SpendWise AI 🚀

**Mint for AI Spend.** Stop overpaying for your AI tech stack.

SpendWise AI helps startups and power users identify redundant subscriptions, optimize seat counts, and save thousands on AI tools using a defensible audit engine and personalized AI summaries.

## ✨ Features

- **Dynamic Audit Form:** Easily input your AI tool subscriptions and seat counts.
- **Audit Engine:** Proprietary logic to identify overspending based on real May 2026 market rates.
- **AI-Powered Insights:** Personalized savings summaries (Anthropic/OpenAI ready).
- **Lead Capture:** Save your report and get a permanent audit link (Supabase integrated).
- **Modern UI:** High-polish, responsive design built with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Supabase (Mocked for local development)
- **Testing:** Vitest + v8 Coverage

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

4. **Check coverage:**
   ```bash
   npm run test:coverage
   ```

## 🧪 Testing

The core `auditEngine` is fully tested to ensure accuracy in savings calculations.
- **Current Coverage:** >85% (Required: 50%)

## 📂 Project Structure

- `src/utils/auditEngine.ts`: Core logic for savings calculation.
- `src/components/AuditContainer.tsx`: Main state orchestrator.
- `src/app/actions.ts`: Server Actions for AI generation and lead capture.
- `PRICING_DATA.md`: Source of truth for AI tool pricing rules.

## 📐 Architecture Decisions

1. **Next.js (App Router):** Chosen for its robust server-side rendering, built-in SEO optimizations, and seamless integration with Vercel.
2. **TypeScript:** Used to ensure type safety across the audit engine logic and UI components, reducing runtime errors.
3. **Tailwind CSS:** Enables rapid, responsive UI development with a consistent design system without the overhead of heavy UI libraries.
4. **Supabase:** Provides a managed Postgres backend for reliable lead capture and data persistence with minimal configuration.

---
*Built for the Credex WebDev 2026 Assignment.*
