'use server';

import { supabase } from '@/utils/supabase';
import { AuditResult } from '@/types';

export async function captureLead(formData: FormData) {
  const email = formData.get('email') as string;

  console.log(`Capturing lead: ${email}`);

  const { error } = await supabase
    .from('leads')
    .insert([{ email, created_at: new Date().toISOString() }]);

  if (error) {
    console.error('Failed to capture lead', error);
    return { success: false };
  }

  return { success: true };
}

export async function generateAiSummary(result: AuditResult) {
  // In a real app, you would use the Anthropic SDK here:
  /*
  const Anthropic = (await import('@anthropic-ai/sdk')).default;
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  ...
  */
  
  // Simulated API latency
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (result.totalSavings === 0) {
    return "Your AI tech stack is remarkably lean. We analyzed your subscriptions against current market benchmarks and found no immediate overspending. Continue monitoring seat utilization as you scale.";
  }

  const topTool = result.recommendations[0]?.tool;
  return `We've identified $${result.totalSavings.toFixed(2)} in monthly savings, primarily driven by optimizations for ${topTool}. By consolidating seats and aligning with current market rates, you can reduce your annual AI overhead by $${(result.totalSavings * 12).toFixed(2)} without impacting team productivity.`;
}
