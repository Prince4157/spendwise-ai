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
