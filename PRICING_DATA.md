# AI Tool Pricing Data (May 2026)

This file contains defensible pricing rules for common AI tools, used by the `auditEngine` to identify overspending.

| Tool | Plan | Monthly Price (USD) | Unit | Description |
| :--- | :--- | :--- | :--- | :--- |
| **ChatGPT** | Plus | $20 | User | Individual power user |
| **ChatGPT** | Team | $25 | Seat | Min 2 seats, billed monthly |
| **ChatGPT** | Enterprise | $60 | Seat | Estimated, contact for exact |
| **Claude** | Pro | $20 | User | Individual power user |
| **Claude** | Team | $25 | Seat | Min 5 seats |
| **GitHub Copilot** | Individual | $10 | User | |
| **GitHub Copilot** | Business | $19 | Seat | |
| **GitHub Copilot** | Enterprise | $39 | Seat | |
| **Midjourney** | Basic | $10 | User | |
| **Midjourney** | Standard | $30 | User | |
| **Midjourney** | Pro | $60 | User | |
| **Perplexity** | Pro | $20 | User | |
| **Jasper** | Creator | $49 | User | |
| **Jasper** | Pro | $69 | Seat | |

## Logic Rules
1. **Seat Consolidation:** If a team has >5 individual "Plus/Pro" accounts for the same tool, suggest moving to a "Team" plan for better admin controls (even if slightly more expensive, it usually saves on unused seats).
2. **Usage Audit:** If seats > headcount, flag for immediate reduction.
3. **Alternative Suggestion:** If using Jasper Pro but only for basic writing, suggest Claude Pro or ChatGPT Plus.
