/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import BuggyCounter from './week8/day1/exe1/BuggyCounter.jsx';
import ErrorBoundary from './week8/day1/exe1/ErrorBoundary.jsx';
import LifeCycle from './week8/day1/exe2/LifeCycle.jsx';
import FormContainer from './week8/day1/daily_challenge/FormContainer.jsx';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, AlertOctagon, RefreshCw, Trash2, ClipboardList } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('ex1');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
            Week 8: React Mastery
          </h1>
          <p className="text-slate-500">Lifecycle, Events, and Error Boundaries</p>
        </header>

        <nav className="flex justify-center flex-wrap gap-1 mb-8 bg-slate-200/50 p-1 rounded-xl w-fit mx-auto">
          <button
            onClick={() => setActiveTab('ex1')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'ex1' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Exercise 1: Error Boundary
          </button>
          <button
            onClick={() => setActiveTab('ex2')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'ex2' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Exercise 2 & 3: Lifecycle
          </button>
          <button
            onClick={() => setActiveTab('daily')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'daily' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Daily Challenge: Form
          </button>
        </nav>

        <main>
          <AnimatePresence mode="wait">
            {activeTab === 'ex1' && (
              <motion.div
                key="ex1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                {/* Simulation 1 */}
                <section>
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertOctagon className="text-amber-500 w-5 h-5" />
                    <h2 className="text-xl font-bold">Simulation 1: Shared Boundary</h2>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm">
                    Two counters inside one ErrorBoundary. If one crashes at 5, both are replaced.
                  </p>
                  <ErrorBoundary>
                    <div className="flex flex-wrap gap-4">
                      <BuggyCounter />
                      <BuggyCounter />
                    </div>
                  </ErrorBoundary>
                </section>

                {/* Simulation 2 */}
                <section>
                  <div className="flex items-center space-x-2 mb-4">
                    <Layout className="text-indigo-500 w-5 h-5" />
                    <h2 className="text-xl font-bold">Simulation 2: Isolated Boundaries</h2>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm">
                    Each counter has its own ErrorBoundary. Only the crashed one is replaced.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <ErrorBoundary>
                      <BuggyCounter />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <BuggyCounter />
                    </ErrorBoundary>
                  </div>
                </section>

                {/* Simulation 3 */}
                <section>
                  <div className="flex items-center space-x-2 mb-4">
                    <RefreshCw className="text-rose-500 w-5 h-5" />
                    <h2 className="text-xl font-bold">Simulation 3: No Boundary</h2>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm">
                    No ErrorBoundary protection. At 5, the entire app crash state is visible.
                  </p>
                  <BuggyCounter />
                </section>
              </motion.div>
            )}

            {activeTab === 'ex2' && (
              <motion.div
                key="ex2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <section>
                  <div className="flex items-center space-x-2 mb-4">
                    <Trash2 className="text-blue-500 w-5 h-5" />
                    <h2 className="text-xl font-bold">Lifecycle Experiments</h2>
                  </div>
                  <LifeCycle />
                </section>
              </motion.div>
            )}

            {activeTab === 'daily' && (
              <motion.div
                key="daily"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <section>
                  <div className="flex items-center space-x-2 mb-4">
                    <ClipboardList className="text-emerald-500 w-5 h-5" />
                    <h2 className="text-xl font-bold">Form Container Challenge</h2>
                  </div>
                  <FormContainer />
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
