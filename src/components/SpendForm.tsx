'use client';

import React, { useState, useEffect } from 'react';
import { Subscription, AuditData } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

const TOOLS = [
  'ChatGPT',
  'Claude',
  'GitHub Copilot',
  'Midjourney',
  'Perplexity',
  'Jasper',
  'Other',
];

interface SpendFormProps {
  onAudit: (data: AuditData) => void;
}

export default function SpendForm({ onAudit }: SpendFormProps) {
  const [auditData, setAuditData] = useState<AuditData>(() => {
    // Initializer function for state
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('spendwise-audit-data');
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (e) {
          console.error('Failed to parse saved audit data', e);
        }
      }
    }
    return {
      headcount: 1,
      subscriptions: [],
    };
  });

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('spendwise-audit-data', JSON.stringify(auditData));
  }, [auditData]);

  const addSubscription = () => {
    const newSub: Subscription = {
      id: crypto.randomUUID(),
      tool: TOOLS[0],
      plan: 'Pro/Plus',
      seats: 1,
      monthlySpend: 20,
    };
    setAuditData((prev) => ({
      ...prev,
      subscriptions: [...prev.subscriptions, newSub],
    }));
  };

  const removeSubscription = (id: string) => {
    setAuditData((prev) => ({
      ...prev,
      subscriptions: prev.subscriptions.filter((s) => s.id !== id),
    }));
  };

  const updateSubscription = (id: string, updates: Partial<Subscription>) => {
    setAuditData((prev) => ({
      ...prev,
      subscriptions: prev.subscriptions.map((s) =>
        s.id === id ? { ...s, ...updates } : s
      ),
    }));
  };

  const updateHeadcount = (headcount: number) => {
    setAuditData((prev) => ({ ...prev, headcount }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 transition-colors">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">AI Spend Audit</h2>
      
      <div className="mb-8">
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Company Headcount
        </label>
        <input
          type="number"
          min="1"
          value={auditData.headcount}
          onChange={(e) => updateHeadcount(parseInt(e.target.value) || 1)}
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:bg-zinc-800 dark:text-white"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Subscriptions</h3>
          <button
            onClick={addSubscription}
            className="px-4 py-2 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors text-sm font-medium"
          >
            + Add Tool
          </button>
        </div>

        {auditData.subscriptions.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-500">
            No subscriptions added yet. Click &quot;+ Add Tool&quot; to get started.
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {auditData.subscriptions.map((sub) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                          Tool
                        </label>
                        <select
                          value={sub.tool}
                          onChange={(e) => updateSubscription(sub.id, { tool: e.target.value })}
                          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-sm dark:text-white"
                        >
                          {TOOLS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                          Monthly Spend ($)
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={sub.monthlySpend}
                          onChange={(e) =>
                            updateSubscription(sub.id, {
                              monthlySpend: parseFloat(e.target.value) || 0,
                            })
                          }
                          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-sm dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                          Plan Name
                        </label>
                        <input
                          type="text"
                          value={sub.plan}
                          onChange={(e) => updateSubscription(sub.id, { plan: e.target.value })}
                          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-sm dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                          Seats
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={sub.seats}
                          onChange={(e) =>
                            updateSubscription(sub.id, {
                              seats: parseInt(e.target.value) || 1,
                            })
                          }
                          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-sm dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => removeSubscription(sub.id)}
                        className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Total Monthly Spend</p>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">
            ${auditData.subscriptions.reduce((acc, sub) => acc + sub.monthlySpend, 0).toFixed(2)}
          </p>
        </div>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg shadow-blue-500/20"
          onClick={() => onAudit(auditData)}
        >
          Run Audit
        </button>
      </div>
    </div>
  );
}
