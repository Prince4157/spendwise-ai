'use client';

import React, { useState } from 'react';
import SpendForm from './SpendForm';
import SavingsReport from './SavingsReport';
import { AuditData, AuditResult } from '@/types';
import { runAudit } from '@/utils/auditEngine';
import { motion, AnimatePresence } from 'framer-motion';
import { generateAiSummary } from '@/app/actions';

export default function AuditContainer() {
  const [result, setResult] = useState<AuditResult | null>(null);
  const [aiSummary, setAiSummary] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAudit = async (data: AuditData) => {
    const auditResult = runAudit(data);
    setResult(auditResult);
    
    setIsAiLoading(true);
    try {
      const summary = await generateAiSummary(auditResult);
      setAiSummary(summary);
    } catch (error) {
      console.error('Failed to generate AI summary', error);
      setAiSummary("Unable to generate summary at this time. Please try again later.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setAiSummary('');
  };

  return (
    <AnimatePresence mode="wait">
      {result ? (
        <motion.div
          key="report"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <SavingsReport 
            result={result} 
            onReset={handleReset} 
            aiSummary={aiSummary} 
            isAiLoading={isAiLoading}
          />
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <SpendForm onAudit={handleAudit} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
