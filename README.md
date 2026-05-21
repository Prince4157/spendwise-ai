# SpendWise AI

**SpendWise AI** is a "Mint for AI tool spend" web application that helps startups identify overspending on AI subscriptions and suggests cost-effective alternatives. Built as a lead-generation asset for Credex, it provides instant audits and personalized savings reports.

## Quick Start

### Prerequisites
- Node.js 20+
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd spendwise-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment
The application is configured for deployment on **Vercel**. 

## Decisions
1. **Next.js (App Router):** Chosen for its robust server-side rendering, built-in SEO optimizations, and seamless integration with Vercel.
2. **TypeScript:** Used to ensure type safety across the audit engine logic and UI components, reducing runtime errors.
3. **Tailwind CSS:** Enables rapid, responsive UI development with a consistent design system without the overhead of heavy UI libraries.
4. **Supabase:** Provides a managed Postgres backend for reliable lead capture and data persistence with minimal configuration.
5. **Prettier/ESLint integration:** Established early to maintain a clean, idiomatic codebase from the first commit.

## Deployed URL
[Link to Live App](https://spendwise-ai.vercel.app) *(Update after deployment)*

## Screenshots
*(Screenshots will be added as the UI develops)*
