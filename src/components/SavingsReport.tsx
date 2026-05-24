import React, { useState } from 'react';
import { AuditResult } from '@/types';
import { captureLead } from '@/app/actions';
import { motion } from 'framer-motion';

interface SavingsReportProps {
  result: AuditResult;
  onReset: () => void;
  aiSummary?: string;
  isAiLoading?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function SavingsReport({ 
  result, 
  onReset, 
  aiSummary, 
  isAiLoading 
}: SavingsReportProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const annualSavings = result.totalSavings * 12;

  const handleSubmit = async (formData: FormData) => {
    const res = await captureLead(formData);
    if (res.success) {
      setIsSubmitted(true);
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 transition-colors">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Monthly Savings</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">${result.totalSavings.toFixed(2)}</p>
        </motion.div>
        <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 transition-colors">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Annual Potential</p>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">${annualSavings.toFixed(2)}</p>
        </motion.div>
        <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 transition-colors">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Efficiency Score</p>
          <p className="text-3xl font-bold text-zinc-900 dark:text-white">
            {Math.round((result.totalPotentialSpend / result.totalCurrentSpend) * 100) || 100}%
          </p>
        </motion.div>
      </div>

      {/* AI Summary */}
      <motion.div variants={item} className="p-8 bg-zinc-900 dark:bg-zinc-900 text-zinc-100 rounded-3xl shadow-xl overflow-hidden relative border border-zinc-800 transition-colors">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-400">AI Audit Summary</h3>
          </div>
          {isAiLoading ? (
            <div className="space-y-3">
              <div className="h-4 bg-zinc-800 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-zinc-800 rounded w-1/2 animate-pulse" />
            </div>
          ) : (
            <p className="text-lg leading-relaxed text-zinc-200">
              {aiSummary || "Generating your personalized savings strategy..."}
            </p>
          )}
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-blue-500">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
        </div>
      </motion.div>

      {/* Detailed Recommendations */}
      <motion.div variants={item} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors">
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/50">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Priority Recommendations</h3>
        </div>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {result.recommendations.length === 0 ? (
            <div className="p-12 text-center text-zinc-500 dark:text-zinc-400">
              Your AI stack is already highly optimized. Great job!
            </div>
          ) : (
            result.recommendations.map((rec, i) => (
              <div key={i} className="p-6 flex items-start gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className={`mt-1 p-2 rounded-lg ${
                  rec.type === 'reduction' ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 
                  rec.type === 'optimization' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' : 
                  'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-zinc-900 dark:text-white">{rec.tool}</h4>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">Save ${rec.potentialSavings.toFixed(2)}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{rec.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>

      <motion.div variants={item} className="flex justify-center pt-4 flex-col items-center gap-6">
        <div className="w-full max-w-md bg-blue-50 dark:bg-blue-900/10 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center transition-colors">
          {isSubmitted ? (
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Link Sent!</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Check your inbox for your personalized audit report.</p>
            </div>
          ) : (
            <>
              <h4 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">Save your report</h4>
              <p className="text-blue-700 dark:text-blue-400 text-sm mb-6">Enter your details to get a permanent link to this audit and periodic AI spend tips.</p>
              <form action={handleSubmit} className="space-y-4">
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Work Email" 
                  required
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-900/50 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-zinc-800 dark:text-white"
                />
                <button 
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                >
                  Get My Audit Link
                </button>
              </form>
            </>
          )}
        </div>

        <button
          onClick={onReset}
          className="px-8 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-medium text-sm"
        >
          Back to Audit Form
        </button>
      </motion.div>
    </motion.div>
  );
}
