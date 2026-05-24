import { describe, it, expect } from 'vitest';
import { runAudit } from './auditEngine';
import { AuditData } from '../types';

describe('auditEngine', () => {
  it('should calculate total spend correctly', () => {
    const data: AuditData = {
      headcount: 10,
      subscriptions: [
        { id: '1', tool: 'ChatGPT', plan: 'Plus', seats: 2, monthlySpend: 40 },
        { id: '2', tool: 'Claude', plan: 'Pro', seats: 1, monthlySpend: 20 },
      ],
    };
    const result = runAudit(data);
    expect(result.totalCurrentSpend).toBe(60);
    expect(result.totalSavings).toBe(0);
  });

  it('should identify overpriced plans', () => {
    const data: AuditData = {
      headcount: 10,
      subscriptions: [
        { id: '1', tool: 'ChatGPT', plan: 'Plus', seats: 1, monthlySpend: 50 }, // Should be 20
      ],
    };
    const result = runAudit(data);
    expect(result.totalCurrentSpend).toBe(50);
    expect(result.totalSavings).toBe(30);
    expect(result.recommendations[0].type).toBe('optimization');
  });

  it('should identify excess seats vs headcount', () => {
    const data: AuditData = {
      headcount: 2,
      subscriptions: [
        { id: '1', tool: 'ChatGPT', plan: 'Plus', seats: 5, monthlySpend: 100 }, // 3 excess seats
      ],
    };
    const result = runAudit(data);
    expect(result.totalSavings).toBe(60); // 3 * 20
    expect(result.recommendations[0].type).toBe('reduction');
  });

  it('should handle multiple recommendations', () => {
    const data: AuditData = {
      headcount: 2,
      subscriptions: [
        { id: '1', tool: 'ChatGPT', plan: 'Plus', seats: 5, monthlySpend: 150 }, // Overpriced (50) AND excess (60)
      ],
    };
    const result = runAudit(data);
    // Overpriced: 150 - (5 * 20) = 50
    // Excess: (5 - 2) * 20 = 60
    // Total savings: 110
    expect(result.totalSavings).toBe(110);
    expect(result.recommendations).toHaveLength(2);
  });
});
