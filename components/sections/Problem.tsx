"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, XCircle, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: TrendingDown,
    title: "No consistent leads",
    description: "You&apos;re relying on word-of-mouth while your competitors dominate local search and social media.",
  },
  {
    icon: XCircle,
    title: "Missed inquiries",
    description: "Every minute a lead waits for a reply, the chance of conversion drops by 80%.",
  },
  {
    icon: Clock,
    title: "Manual follow-ups",
    description: "Wasting hours chasing people who aren&apos;t interested. Your team should be closing.",
  },
  {
    icon: AlertTriangle,
    title: "Weak online presence",
    description: "A website that looks like it&apos;s from 2015 erodes trust in seconds. Clients expect better.",
  },
];

export function Problem() {
  return (
    <section className="py-32 relative overflow-hidden" id="problem">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-purple-500 font-black tracking-widest uppercase text-xs mb-4">The Reality</div>
            <h2 className="text-5xl font-black tracking-tighter text-[var(--foreground)] sm:text-7xl mb-8">
              Running a business is hard. <br />
              <span className="text-zinc-500 italic opacity-50">Generating leads shouldn&apos;t be.</span>
            </h2>
            <p className="text-xl font-bold text-zinc-500 italic leading-relaxed mb-10">
              Most local businesses have a &quot;leaky bucket&quot; problem. 
              They spend time and money on marketing, only for leads to 
              disappear into the void.
            </p>
            <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 shadow-2xl">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-500 text-white shadow-xl rotate-3">
                <Zap size={28} className="fill-current" />
              </div>
              <p className="text-lg font-black text-[var(--foreground)] tracking-tight leading-snug uppercase">
                Stop the leak. Start the engine.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              >
                <Card className="h-full border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 hover:border-purple-500/50">
                  <problem.icon className="h-8 w-8 text-purple-500 mb-6" />
                  <h3 className="text-xl font-black text-[var(--foreground)] mb-3 tracking-tight uppercase">{problem.title}</h3>
                  <p className="text-sm font-medium text-zinc-500 leading-relaxed">{problem.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
