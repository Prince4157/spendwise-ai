export interface Subscription {
  id: string;
  tool: string;
  plan: string;
  seats: number;
  monthlySpend: number;
}

export interface AuditData {
  headcount: number;
  subscriptions: Subscription[];
}

export interface Recommendation {
  tool: string;
  type: 'optimization' | 'reduction' | 'alternative';
  message: string;
  potentialSavings: number;
}

export interface AuditResult {
  totalCurrentSpend: number;
  totalPotentialSpend: number;
  totalSavings: number;
  recommendations: Recommendation[];
}
